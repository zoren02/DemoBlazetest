const {Given, When, Then, Before, After} = require("@cucumber/cucumber")
const {expect, assert} = require("chai")
const {initDriver} = require("../support/utility")
const {By} = require("selenium-webdriver")
const {setDefaultTimeout} = require("@cucumber/cucumber")
const { delayed } = require("selenium-webdriver/lib/promise")
setDefaultTimeout(80*1000);

let driver;
Before(function(){
    driver = initDriver()
}
);

After(function(){
    
});

function sleep(seconds){
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) {}
};

//unregistered
Given('Login1 User access DEMO BLAZE', async () =>{
    await driver.get("https://www.demoblaze.com/index.html");
    driver.manage().window().maximize();
});

When('Login1 User clicks Log in', async () =>{
    await driver.findElement(By.xpath("/html/body/nav/div[1]/ul/li[5]/a")).click();
    
});

When('Login1 User enters a invalid username', async () =>{
    sleep(1);
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/form/div[1]/input")).sendKeys("asdfghjkl1234");
});

When('Login1 User enters a correct password', async () =>{
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/form/div[2]/input")).sendKeys("asdfghjkl1234");
});

When ('Login1 User clicks Log in button', async () =>{
 
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[3]/button[2]")).click();
   
});
Then ('Login1 User will be notified that user does not exist', async () =>{
  
sleep(1);
driver.findElement(By.linkText("OK")).click();
sleep(2);
driver.close();
driver.close();
});
//registered
Given('Login2 User access DEMO BLAZE', async () =>{
    await driver.get("https://www.demoblaze.com/index.html");
    driver.manage().window().maximize();
});

When('Login2 User clicks Log in', async () =>{
    await driver.findElement(By.xpath("/html/body/nav/div[1]/ul/li[5]/a")).click();
    
});

When('Login2 User enters an valid username', async () =>{
    sleep(1);
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/form/div[1]/input")).sendKeys("tesssttt");
});

When('Login2 User enters a correct password', async () =>{
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/form/div[2]/input")).sendKeys("tesssttt");
});

Then ('Login2 User clicks Log in button', async () =>{
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[3]/button[2]")).click();
    sleep(3);
    driver.close();
});

//Logout
Given('Logout User access DEMO BLAZE', async () =>{
    await driver.get("https://www.demoblaze.com/index.html");
    driver.manage().window().maximize();
});

When('Logout User clicks Log in', async () =>{
    await driver.findElement(By.xpath("/html/body/nav/div[1]/ul/li[5]/a")).click();
    
});

When('Logout User enters a valid username', async () =>{
    sleep(1);
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/form/div[1]/input")).sendKeys("tesssttt");
});

When('Logout User enters a correct password', async () =>{
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/form/div[2]/input")).sendKeys("tesssttt");
});

When('Logout User clicks Log in button', async () =>{
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[3]/button[2]")).click();
});

Then ('Logout User clicks Log out button', async () =>{
    sleep(5);
    await driver.findElement(By.xpath("/html/body/nav/div[1]/ul/li[6]/a")).click();
    driver.close();
});