package stepDefinitions;

import cucumber.api.java.en.And;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import pageObjects.ComputersPageObject;

/* ComputerRead stepDefinition class is designed to find a register in database table by using Page Object pattern
* Re utilization methods are used in this stepDefinition class and only missing methods are declared*/

public class ComputerRead {
    public BaseSteps baseSteps;
    ComputersPageObject computersPage;
    //create a new driver instance type htmlUnitDriver
    HtmlUnitDriver driver = new HtmlUnitDriver();

    public ComputerRead (BaseSteps baseSteps) {
        this.baseSteps = baseSteps;
    }

    @And("^I should see the introduced date \"(.*)\"$")
    public void introducedDateField(String IntroducedDate) throws Throwable {
        computersPage = new ComputersPageObject(driver);
        computersPage.getPage();
        computersPage.introducedDateFound(IntroducedDate);
    }
    @And("^I should see the discontinued date \"(.*)\"$")
    public void discontinuedDateField(String DiscontinuedDate) throws Throwable {
        computersPage.introducedDateFound(DiscontinuedDate);
    }
    @And("^I should see the company \"(.*)\"$")
    public void companyField(String companyName) throws Throwable {
        computersPage.introducedDateFound(companyName);
        driver.quit();
    }
}


