"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CucumberReportExtension_1 = require("../reporting/CucumberReportExtension");
var jsonReports = process.cwd() + "/reports/json";
exports.config = {
    // if using seleniumServerJar, do not specify seleniumAddress !!!
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    specs: ["../features/*.feature"],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: "http://localhost:8808/",
    suites: {
        "homepage": "../features/Home.feature",
        "coursedetails": "../features/CourseDetails.feature"
    },
    // onPrepare: () => {
    //     browser.ignoreSynchronization = true;
    //     browser.manage().window().maximize();
    //     CucumberReportExtension.CreateReportFile(jsonReports);
    // },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        // format: ['pretty'],
        format: "json:./reports/json/cucumber_report.json",
        require: ['../steps/*.js', '../hooks/*.js'],
        tags: '@smoke or @regression'
    },
    onComplete: function () {
        CucumberReportExtension_1.CucumberReportExtension.GenerateCucumberReport();
    },
};
//# sourceMappingURL=config.js.map