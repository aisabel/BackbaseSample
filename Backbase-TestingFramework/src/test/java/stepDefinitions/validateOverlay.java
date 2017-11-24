package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;
public class validateOverlay {
    public static WebDriver driver;

    public validateOverlay() {
    }

    @Given("^user open computers page$")
    public void userHP() throws Throwable {
        driver = new FirefoxDriver();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().implicitlyWait(10L, TimeUnit.SECONDS);
        driver.get("http://computer-database.herokuapp.com/computers");
        System.out.println("");
        System.out.println("Results:");
        System.out.println("Computer\'s database page opened");
    }

    @Then("^I validate masthead is displayed with title text$")
    public void mastheadDisplayed() throws Throwable {
        driver.findElement(By.cssSelector("header[class=\'topbar\']"));
        System.out.println("Validate masthead is displayed with title text:");
        System.out.println("Result masterhead text:" + driver.findElement(By.cssSelector("h1[class=\'fill\']")).getText());
    }

    @Then("^I validate masthead title is clickable$")
    public void mastheadClickable() throws Throwable {
        driver.findElement(By.cssSelector("h1[class=\'fill\']")).click();
        System.out.println("Validate masthead is clickable");
    }

    @Then("^I validate title exist and display available resources$")
    public void titleAvailable() throws Throwable {
        driver.findElement(By.xpath("//h1[contains(text(),\'computers found\')]")).getText();
        System.out.println("Validate title exist and display available resources");
        System.out.println("Available resources:" + driver.findElement(By.xpath("//h1[contains(text(),\'computers found\')]")).getText());
    }

    @Then("^I validate search box exist$")
    public void searchboxExist() throws Throwable {
        driver.findElement(By.id("searchbox")).sendKeys(new CharSequence[0]);
        System.out.println("Validate search box exist");
    }

    @Then("^I validate filter by name button exist$")
    public void filterButtonExist() throws Throwable {
        driver.findElement(By.id("searchsubmit")).click();
        System.out.println("Button filter by name exist");
    }

    @Then("^I validate add new computer exist$")
    public void add() throws Throwable {
        driver.findElement(By.linkText("Add a new computer"));
        System.out.println("Validate add new computer button exist");
    }

    @Then("^I validate table exist$")
    public void tableExist() throws Throwable {
        driver.findElement(By.cssSelector("table[class=\'computers zebra-striped\']"));
        System.out.println("Table is displayed");
    }

    @Then("^I validate pagination buttons exist$")
    public void paginationExist() throws Throwable {
        driver.findElement(By.id("pagination"));
        System.out.println("Pagination buttons are displayed");
        driver.quit();
    }
}

