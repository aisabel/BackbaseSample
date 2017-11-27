package pageObjects;

import cucumber.api.java.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import java.util.concurrent.TimeUnit;

/* The PageObject pattern allows to have a skeleton of the page and locate elements with selenium in order to be reused by step definitions.
Parameters traverse must be set up in each step definition
Selenium Locators used were selected according to their uniqueness or availability attributes in page*/

public class ComputersPageObject {

    /*HtmlUnitDriver is a selenium headless driver providing non-GUI implementation of Selenium WebDriver. It is based on HtmlUnit, fastest and light-weight
    * Other browsers can be used, but compatibility with selenium version must be observed*/
    public HtmlUnitDriver driver;

    //constructor
    public ComputersPageObject (HtmlUnitDriver driver) {
        this.driver = driver;
    }

    @Before() /*This function opens page and can be re-used by all scenarios*/
    public void getPage () {
        driver.manage().deleteAllCookies();/* Command delete all coockies when browser is opened*/
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("http://computer-database.herokuapp.com/computers");
    }

    public void clickAddNewComputer () {
        driver.findElement(By.id("add")).click();
    }

    public WebElement nameInput () {
        return driver.findElement(By.name("name"));
    }

    public WebElement introducedDateInput () {
        return driver.findElement(By.id("introduced"));
    }

    public WebElement discontinuedDateInput () {
        return driver.findElement(By.id("discontinued"));
    }

     public WebElement companyNameSelect(){
         return driver.findElement(By.id ("company"));
    }

    public void clickCreateNewComputer () {
        driver.findElement(By.cssSelector("input[class=\'btn primary\']")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    public WebElement computerMessage(){
        return driver.findElement(By.cssSelector("div[class=\'alert-message warning\']"));
    }

    public WebElement searchboxInput(){
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        return driver.findElement(By.id("searchbox"));
    }

    public void filterByNameBttn(){
        driver.findElement(By.id("searchsubmit")).click();
    }

    public WebElement computerLink(String Name){
        return driver.findElement(By.linkText(Name));
    }

    public void clickComputerLink(String Name){
        driver.findElement(By.linkText(Name)).click();
    }
    public WebElement introducedDateFound(String IntroducedDate){
        return driver.findElement(By.xpath("//*[contains(text(), IntroducedDate)]"));
        //(WebElement)((JavascriptExecutor)driver).executeScript("return $(\":contains('foobar')\").filter(function() {" +"return $(this).text().trim() === 'foobar'}).get(0);");
    }
    public WebElement DiscontinuedDateFound(String DiscontinuedDate){
        return driver.findElement(By.xpath("//*[contains(text(), DiscontinueDate)]"));
    }
    public WebElement companyNameFound(String companyName){
        return driver.findElement(By.xpath("//*[contains(text(), companyName)]"));
     }

    public void clickDeleteBttn(){
        driver.findElement(By.cssSelector("input[class=\'btn danger\']")).click();
    }
    public WebElement masterheadDisplayed(){
        driver.findElement(By.cssSelector("header[class=\'topbar\']"));
        return driver.findElement(By.cssSelector("h1[class=\'fill\']"));
    }

    public void masterheadClickable(){
        driver.findElement(By.cssSelector("h1[class=\'fill\']")).click();
    }

    public String headerIsDisplayed() throws Throwable {
        return driver.findElement(By.xpath("//h1[contains(text(),\'computers found\')]")).getText();
    }

    public WebElement filterButton(){
        return driver.findElement(By.id("searchsubmit"));
    }

    public WebElement addNewComputerDisplayed(){
        return driver.findElement(By.linkText("Add a new computer"));
    }

    public WebElement dataTableIsDisplayed(){
        return driver.findElement(By.cssSelector("table[class=\'computers zebra-striped\']"));
    }

    public WebElement paginationExist() {
        return driver.findElement(By.id("pagination"));
    }
}
