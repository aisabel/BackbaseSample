package pageObjects;

import cucumber.api.java.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;

import java.util.concurrent.TimeUnit;

public class computersPageObject {

    //attribute
    private HtmlUnitDriver driver;

    //constructor
    public computersPageObject (HtmlUnitDriver driver) {
        this.driver = driver;
    }


    @Before() /*This function opens page and can be re-used by all scenarios*/
    public void getPage () {
        driver.manage().deleteAllCookies();/* Command delete all coockies when browser is opened*/
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("http://computer-database.herokuapp.com/computers");
    }

    public void clickAddNewComputer () {
        driver.findElement(By.linkText("Add a new computer")).click();
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

    public WebElement computerCreatedMessage(){
        return driver.findElement(By.cssSelector("div[class=\'alert-message warning\']"));
    }

    public WebElement searchboxInput () {
        WebElement queHay = driver.findElement(By.cssSelector("div[id=\'actions\']"));

       /*
        WebElement var = driver.findElement(By.cssSelector(("div#actions[id=\'actions\']")));
       form input[name='username']
        form action="/computers"
         driver.findElement(By.id("actions"));
        css = div#actions form#action input#searchbox()
        driver.findElement(By.cssSelector("div[id=\'actions\']"));
        driver.findElement(By.cssSelector("input[id=\'searchbox\']"));
        driver.findElement(By.cssSelector("div#actions form input#searchbox"));
        "#rightbar > .menu > li:nth-of-type(3) > h5")
        driver.FindElement(By.CssSelector("#rightbar > .menu > li:nth-of-type(3) > h5"));
        driver.findElement(By.cssSelector("#actions > .form > .input#searchbox"));
        driver.findElement(By.cssSelector("input[id=searchbox]"));
        */
        return driver.findElement(By.id("searchbox"));
    }

    public WebElement filterByNameBttn(){
        return driver.findElement(By.id("searchsubmit"));
    }

}
