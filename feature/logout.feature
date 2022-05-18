Feature: Logout to BlazeMeter Demo Store

#Logout001 - Positive case: Log out
Scenario: Log out of an account
Given Logout User access DEMO BLAZE
When Logout User clicks Log in
When Logout User enters a valid username
When Logout User enters a correct password
When Logout User clicks Log in button
Then Logout User clicks Log out button