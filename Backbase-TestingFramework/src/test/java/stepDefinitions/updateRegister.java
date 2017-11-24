package stepDefinitions;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.Select;
import pageObjects.computersPageObject;

public class updateRegister {
    private BaseSteps baseSteps;
    computersPageObject computersPage;
    //create a new driver instance type htmlUnitDriver
    HtmlUnitDriver driver = new HtmlUnitDriver();

    @Before()
    public void beforeMethod() {
        computersPage = new computersPageObject(driver);
    }

    public updateRegister(BaseSteps baseSteps) {
        this.baseSteps = baseSteps;
    }

    @When("^I fill in filter field with \"(.*)\"$")
    public void searchboxField(String NameSearch) throws Throwable {
        computersPage.searchboxInput().sendKeys(new CharSequence[]{NameSearch});
    }

    @When("^I click filter by name button$")
    public void filterButton() throws Throwable {
        computersPage.filterByNameBttn().click();
    }

    @Then("^I should see the \"(.*)\" link$")
    public void seeLink() throws Throwable {
        driver.findElements(By.partialLinkText("Nokia v1"));
    }

    @Then("^I click \"(.*)\" link$")
    public void clickLinkFound(String Name) throws Throwable {
        driver.findElement(By.linkText("Nokia v1")).click();
    }

    @Then("^I update computer name field with \"(.*)\"$")
    public void updateName(String NameUpdate) throws Throwable {
        driver.findElement(By.id("name")).clear();
        driver.findElement(By.id("name")).sendKeys(new CharSequence[]{NameUpdate});
    }

    @And("^I update introduced date field with \"(.*)\"$")
    public void updateIntroducedDate(String IntroducedDate) throws Throwable {
        driver.findElement(By.id("introduced")).clear();
        driver.findElement(By.id("introduced")).sendKeys(new CharSequence[]{IntroducedDate});
    }

    @And("^I update discontinued date field with \"(.*)\"$")
    public void updateDiscontinuedDate(String DiscontinuedDate) throws Throwable {
        driver.findElement(By.id("discontinued")).clear();
        driver.findElement(By.id("discontinued")).sendKeys(new CharSequence[]{DiscontinuedDate});
    }

    @Then("^I update \"(.*)\" option$")
    public void updateSelectCompany(String company) throws Throwable {
        Select dropdown = new Select(driver.findElement(By.id("company")));
        dropdown.selectByValue("3");
    }

    @Then("^I click save this computer button$")
    public void saveThisComputer() throws Throwable {
        driver.findElement(By.cssSelector("input[class=\'btn primary\']")).click();
    }

    @Then("^I verify update message is displayed$")
    public void verifyUpdateMessage() throws Throwable {
        driver.findElement(By.cssSelector("div[class=\'alert-message warning\']")).getText();
        driver.close();
    }

}

