package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import pageObjects.ComputersPageObject;

/* ComputerDBOverlay stepDefinition class is designed to verify elements displayed in computers page by using Page Object pattern*/

public class ComputerDBOverlay {
    public BaseSteps baseSteps;
    ComputersPageObject computersPage;
    //create a new driver instance type htmlUnitDriver
    HtmlUnitDriver driver = new HtmlUnitDriver();

    public ComputerDBOverlay (BaseSteps baseSteps){
            this.baseSteps = baseSteps;
    }

    @Given("^user open computers page$")
    public void userOpenPage() throws Throwable {
            computersPage = new ComputersPageObject(driver);
            computersPage.getPage();
    }

    @Then("^I validate masterhead is displayed with title text$")
    public void masterheadIsDisplayed() throws Throwable {
            computersPage.masterheadDisplayed();
    }

    @Then("^I validate masterhead title is clickable$")
    public void mastheadIsClickable() throws Throwable {
        computersPage.masterheadClickable();
    }

    @Then("^I validate subtitle is displayed and show available resources$")
    public void headerIsDisplayedWithResources() throws Throwable {
        computersPage.headerIsDisplayed();
    }

    @Then("^I validate search box exist in page$")
    public void searchboxIsDisplayed() throws Throwable {
        computersPage.searchboxInput();
    }

    @Then("^I validate filter by name button is displayed$")
    public void filterButtonIsDisplayed() throws Throwable {
        computersPage.filterButton();
    }

    @Then("^I validate add new computer button is displayed$")
    public void addIsDisplayed() throws Throwable {
        computersPage.addNewComputerDisplayed();
    }

    @Then("^I validate table is displayed$")
    public void tableIsDisplayed() throws Throwable {
        computersPage.dataTableIsDisplayed();
    }

    @Then("^I validate pagination buttons exist$")
    public void paginationBttnExist() throws Throwable {
        computersPage.paginationExist();
    }
}

