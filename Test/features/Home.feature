Feature: To work with home page

Background:
    Given I navigate to application

    @smoke
    Scenario: Click course of application
        And I get all the heading
        And I click the 'Selenium framework development' course
        Then I should see 'Selenium framework development' course in coursedetails page
        Then I should see all course information in coursedetails page
            |Courses    |Duration   |
            |Selenium   |2          |
            |Java       |3          |

    @regression
    Scenario: Click course of application second time
        And I get all the heading
        And I click the 'Selenium framework development' course
        Then I should see 'Selenium framework development' course in coursedetails page

    @regression
    Scenario: Search for course from External DataSource
        And I enter text in search from external data source
        And I get all the heading
        # And I see the table working
        #     | UserName | Password |
        #     | Karthik  | abc123   |
