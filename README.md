# BackbaseTestingFramework

<h2>Business Requirement:</h2>
<p align="justified">Create automated tests to cover at least the CRUD (create, read, update, delete) operations on a website that contains a DB of computers. (http://computer-database.herokuapp.com/computers). </p>

<h2>Description:</h2>
<p align="justified">This test suite was designed to meet business requirements by implementing a combination of automated test cases and manual tests for coverage.</br>
Regardless automation: Cucumber framework has been selected by their capability to display human readable instructions in the tests; combined with Selenium to easy locate elements in a powerful headless browser, using JUnit for assertion results; getting as a result an automated report.By using Page Object Pattern we ensure the reusability of methods for step definitions and a centralized UI coupling.</p>

<h2>Specifications, Frameworks and IDE tools:</h2>
<ul><li><a href="https://www.jetbrains.com/idea/download/#section=windows">IDE: *IntelijIDEA 15.0.1</a></li></ul>
<ul><li>Baseline Programming Language:<a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html"> *Java with package (JDK 1.8)</a></ul></li>
<ul>Frameworks
  <li><a href="https://mvnrepository.com/artifact/info.cukes/cucumber-java>*Cucumber framework 1.2.5</a></li>
  <li><a href="http://selenium-release.storage.googleapis.com/3.7/selenium-java-3.7.1.zip">*Selenium for java 3.7.1</a></li>
  <li><a href="https://mvnrepository.com/artifact/junit/junit">*JUnit 4.11 </a></li>
  <li><a href="https://mvnrepository.com/artifact/org.apache.maven.plugins/maven-compiler-plugin">*Maven compiler 3.7.0</a></li>
</ul>
<ul>Other dependencies used:
    <li>Cucumber-java8 1.2.5, Cucumber picontainer 1.2.5, Selenium-server 3.7.1, Cucumber-testing 1.2.5, log4j 1.2.17</li>
    
<p>Note: Maven project will download automatically those framework external libraries based upon the dependencies in pom.xml file. But if in any case you need to go back directly to the source and install manually, each one of the links above leads you to the repositories.</p>

<h2>TestingFramework Structure:</h2>
In order to provide a clear functional framework, the structure has been settup as below:

Backbase-TestingFramework/
<ul>|--lib</ul>
<ul>|--output</ul>
  <ul>
    <li>|<a href="https://github.com/aisabel/BackbaseTestFramework/tree/master/Backbase-TestingFramework/output">-index.html -> Autmoated generated report</a></li>
  </ul>
</ul>
<ul>|--src
  <ul>
    <li>|--main</li>
    <ul>
      <li>|--java</li>
      <li>|--resources</li>
    </ul>
  </ul>
    <ul>|--test
      <ul>
        <li>|--java</li>
            <ul>
              <li><a href="https://github.com/aisabel/BackbaseTestFramework/tree/master/Backbase-TestingFramework/src/test/java/featureFiles">|--featureFiles -> Cucumber feature files</a></li>
              <ul><li><a href="https://github.com/aisabel/BackbaseTestFramework/blob/master/Backbase-TestingFramework/src/test/java/stepDefinitions/RunTest.java">RunTest.class</a> = Specified Runner class to use as pluggin</a>
              <li><a href="https://github.com/aisabel/BackbaseTestFramework/tree/master/Backbase-TestingFramework/src/test/java/pageObjects">|--pageObjects -> Page Object Pattern class</a></li>
              <li><a href="https://github.com/aisabel/BackbaseTestFramework/tree/master/Backbase-TestingFramework/src/test/java/stepDefinitions">|--stepDefinitions -> Defined class methods</a></li>
            </ul>
      </ul>
    </ul>
  </ul>
<ul>|--target
  <li>|--classes</li>
  <li>|--cucumber</li>
  <li>|--generated-test-resources</li>
  <li>|--test-clases</li>
</ul>
<ul><li><a href="https://github.com/aisabel/BackbaseTestFramework/blob/master/Backbase-TestingFramework/target/cucumber-report.json">|--cucumber-report.json</a></li></ul>
<ul><li>Backbase-TestingFramework.iml</li></ul>
<ul><li><a href="https://github.com/aisabel/BackbaseTestFramework/blob/master/Backbase-TestingFramework/pom.xml">pom.xml --> Maven dependency file to load required libraries</a></li></ul>



<h2>Setup Instructions</h2>
In progress...
<ul>
  <li>Install Intelij </li>
  <p>Open Intellij, Go to Preferences -> Plugins,  Choose to install Cucumber for JAVA plugin. You might need to restart the IDE.</p>
  <li>Import project folder as a Maven project</li>
  <li>Go to path src > test > stepDefinitions and select file RunTest. Right click to display context menu and click > Run'Run Test option. This action will display a new window with the progress for testing running.</li>

<h3>External References</h3>
<ul>
  <li><a href="http://docs.seleniumhq.org/projects/webdriver/">Selenium reference page</a></li>
  <li><a href="https://cucumber.io">Cucumber reference page</a></li>
</ul>
