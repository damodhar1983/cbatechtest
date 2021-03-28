package seleniumgluecode;


import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
//import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class Test {
    public static WebDriver driver;
    
    
    @Given("^navigate to commonwealth bank \"([^\"]*)\"$")
    public void navigate_to_nsw_service_center(String URL) throws Throwable {     
    	System.setProperty("webdriver.chrome.driver",".\\chromedriver.exe");
    	driver=new ChromeDriver();
    	driver.manage().window().maximize();
//    	implicit wait
    	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    	//Navigate to the required url
    	driver.get(URL);
    	
    }
    
    @When("^Search for travel money overseas$")
    public void search_for_travel_money_overseas() throws Throwable {
    	driver.findElement(By.linkText("Dismiss")).click();
    	Thread.sleep(500);
    	driver.findElement(By.xpath("//span[@class='icon-search']")).click();
    	//Explicitwait
    	WebDriverWait webdriverwait=new WebDriverWait(driver,10);
    	webdriverwait.until(ExpectedConditions.visibilityOfElementLocated(By.id("header-search-input-box")));
    	WebElement searchtextbox = driver.findElement(By.id("header-search-input-box"));    	
    	searchtextbox.click();
    	//Enter the required text
    	searchtextbox.sendKeys("travel money overseas");
    	searchtextbox.sendKeys(Keys.ENTER);
    	driver.findElement(By.xpath("//a[text()='Money checklist for travelling overseas']")).click();    	
    
			
		}
    
    @When("^verify the subtopics exists as expected$")
    public void verify_the_subtopics_exists_as_expected() throws Throwable {
    	
    	//verify the subtoppics  
    	//Explicitwait
    	WebDriverWait webdriverwait=new WebDriverWait(driver,10);
    	webdriverwait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h3[text()='7. Know the fees and charges']")));
    	WebElement feesandcharges = driver.findElement(By.xpath("//h3[text()='7. Know the fees and charges']"));
    	if(feesandcharges.isDisplayed()) {
    		System.out.println("subtopic : Know the fees and charges : is displayed " );    		
    	}   	
		else {
			System.out.println("subtopic : Know the fees and charges : is NOT displayed " );
		}   	
    	
    }
    @When("^click on logon button$")
    public void click_on_logon_button() throws Throwable {
    	//click on log on button
    	driver.findElement(By.xpath("//span[text()='Log on']")).click(); 
    	Thread.sleep(500);
    	driver.findElement(By.xpath("//a[text()='NetBank log on ']")).click(); 
    	
    }    
    
    @Then("^verify id and password fields are displayed$")
    public void verify_id_and_password_fields_are_displayed() throws Throwable {
    	
    	WebElement clientnumberfield = driver.findElement(By.id("txtMyClientNumber_field"));	
    	WebElement passwordfield = driver.findElement(By.id("txtMyPassword_field"));   
    	//verify the client number field
    	if(clientnumberfield.isDisplayed()) {
    		System.out.println("Client number field :  is displayed " );    		
    	}   	
		else {
			System.out.println("Client number field :  is NOT displayed  " );
		} 
    	//verify the password field
    	if(passwordfield.isDisplayed()) {
    		System.out.println("passwordfield :  is displayed " );    		
    	}   	
		else {
			System.out.println("passwordfield:  is NOT displayed  " );
		} 
    	driver.quit();
    }
    
       
}