    package stepDefinitions;

    import cucumber.api.java.en.And;
    import cucumber.api.java.en.Given;
    import cucumber.api.java.en.Then;
    import cucumber.api.java.en.When;
    import org.openqa.selenium.htmlunit.HtmlUnitDriver;
    import org.openqa.selenium.support.ui.Select;
    import pageObjects.computersPageObject;


    public class createNewRegister {
        private BaseSteps baseSteps;
        computersPageObject computersPage;
        //create a new driver instance type htmlUnitDriver
        HtmlUnitDriver driver = new HtmlUnitDriver();

        public createNewRegister(BaseSteps baseSteps) {
            this.baseSteps = baseSteps;
        }

        @Given("^user is on homepage$")
        public void user_is_on_Home_Page() throws Throwable {
            computersPage = new computersPageObject(driver);
            computersPage.getPage();
        }

        @When("^I click Add a new computer button$")
        public void add() throws Throwable {
           computersPage.clickAddNewComputer();
        }

        @And("^I fill in computer name field with \"(.*)\"$")
        public void computerName(String Name) throws Throwable {
            computersPage.nameInput().sendKeys(new CharSequence[]{Name});
        }

        @And("^I fill in introduced date field with \"(.*)\"$")
        public void introducedDate(String IntroducedDate) throws Throwable {
            computersPage.introducedDateInput().sendKeys(new CharSequence[]{IntroducedDate});
        }

        @And("^I fill in discontinued date field with \"(.*)\"$")
        public void discontinuedDate(String DiscontinuedDate) throws Throwable {
            computersPage.discontinuedDateInput().sendKeys(new CharSequence[]{DiscontinuedDate});
        }

        @Then("^I select \"(.*)\" option$")
        public void selectCompany(String companyName) throws Throwable {
            Select dropdown = new Select(computersPage.companyNameSelect());
            dropdown.selectByVisibleText(companyName);
        }

        @Then("^I click create this computer button$")
        public void createThisComputer() throws Throwable {
            computersPage.clickCreateNewComputer();
        }

        @Then("^I verify success message is displayed$")
        public void verifySuccessMessage() throws Throwable {
            String message = computersPage.computerCreatedMessage().getText();
            System.out.println(message);
            driver.quit();
        }
    }


