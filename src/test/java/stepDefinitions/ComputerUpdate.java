package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.Select;
import pageObjects.ComputersPageObject;

/* ComputerUpdate stepDefinition class is designed to update an existing register in database table by using Page Object pattern
* Re utilization methods are used in this stepDefinition class and only missing methods are declared*/

    public class ComputerUpdate {
        public BaseSteps baseSteps;
        ComputersPageObject computersPage;
        //create a new driver instance type htmlUnitDriver
        HtmlUnitDriver driver = new HtmlUnitDriver();

        public ComputerUpdate (BaseSteps baseSteps) {
            this.baseSteps = baseSteps;
        }

        @When("^I fill in filter field with \"(.*)\"$")
        public void computerSearch (String Name) throws Throwable {
            computersPage = new ComputersPageObject(driver);
            computersPage.getPage();
            computersPage.searchboxInput().sendKeys(new CharSequence[]{Name});
        }

        @When("^I click filter by name button$")
        public void clickFilterButtn () throws Throwable {
            computersPage.filterByNameBttn();
        }

       @Then("^I should see the \"(.*)\" computer link$")
        public void seeComputerLink(String Name) throws Throwable {
           computersPage.computerLink(Name);
       }

        @Then("^I click \"(.*)\" link$")
        public void clickComputerLinkFound (String Name) throws Throwable {
            computersPage.clickComputerLink(Name);
        }

        @Then("^I update computer name field with \"(.*)\"$")
        public void updateComputerName (String NameUpdate) throws Throwable {
            computersPage.nameInput().sendKeys(new CharSequence[]{NameUpdate});
        }

        @And("^I update introduced date field with \"(.*)\"$")
        public void updateIntroducedDate (String IntroducedDate) throws Throwable {
            driver.findElement(By.id("introduced")).clear();
            computersPage.introducedDateInput().sendKeys(new CharSequence[]{IntroducedDate});
        }

        @And("^I update discontinued date field with \"(.*)\"$")
        public void updateDiscontinuedDate (String DiscontinuedDate) throws Throwable {
            driver.findElement(By.id("discontinued")).clear();
            computersPage.discontinuedDateInput().sendKeys(new CharSequence[]{DiscontinuedDate});
        }

        @Then("^I update \"(.*)\" option$")
        public void updateSelectCompany (String companyName) throws Throwable {
            Select dropdown = new Select(computersPage.companyNameSelect());
            dropdown.selectByVisibleText(companyName);
        }

        @Then("^I click save this computer button$")
        public void saveThisComputer () throws Throwable {
            computersPage.clickCreateNewComputer();
        }
        @Then("^I click delete this computer button$")
        public void deleteThisComputer() throws Throwable {
            computersPage.clickDeleteBttn();
        }

        @Then("^I verify delete message is displayed$")
        public void verifyDeleteMessage() throws Throwable {
            String message = computersPage.computerMessage().getText();
            System.out.println(message);
            driver.quit();
        }

        @Then("^I verify update message is displayed$")
        public void verifyUpdateMessage () throws Throwable {
            String message = computersPage.computerMessage().getText();
            System.out.println(message);
            driver.quit();
        }
    }



