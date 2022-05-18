Feature: Login to DEMO BLAZE

#Login2 - Positive case: Valid username
Scenario: Login using an valid username
Given Login2 User access DEMO BLAZE
When Login2 User clicks Log in
When Login2 User enters an valid username
When Login2 User enters a correct password
Then Login2 User clicks Log in button

#Login1 - Negative case: invalid credentials
Scenario: Log in using a invalid credential
Given Login1 User access DEMO BLAZE
When Login1 User clicks Log in
When Login1 User enters a invalid username
When Login1 User enters a correct password
When Login1 User clicks Log in button
Then Login1 User will be notified that user does not exist