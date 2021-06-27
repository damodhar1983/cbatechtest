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
    
    
    @Given("^navigate to covidgame \"([^\"]*)\"$")
    public void navigate_to_covidgame(String URL) throws Throwable {     
    	System.setProperty("webdriver.chrome.driver",".\\chromedriver.exe");
    	driver=new ChromeDriver();
    	driver.manage().window().maximize();
//    	implicit wait
    	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    	//Navigate to the required url
    	driver.get(URL);
    	
    }
    
    @When("^User should be created$")
    public void user_should_be_created() throws Throwable {
   
    	Thread.sleep(500);
    	driver.findElement(By.xpath("//input[@id='worrior_username']")).click();
    	driver.findElement(By.xpath("//input[@id='worrior_username']")).sendKeys("testuser");
    	//click on create warrior    	
    	driver.findElement(By.xpath("//a[text()='Create warrior']")).click();
		//click on start your journey
    	driver.findElement(By.xpath("//a[text()='Start your journey testuser']")).click();
    	
		}
    
    @When("^complete some challenges$")
    public void complete_some_challenges() throws Throwable {
    	//click on take the bus
    	driver.findElement(By.xpath("//a[text()='Take the bus']")).click();
    	//click on the start button
    	driver.findElement(By.xpath("//button[text()='Start']")).click();
    	//click on the start button
    	driver.findElement(By.xpath("//a[text()='Use your superheroes Mask and sanitizer while traveling on public transport and clean your hands regularly.']")).click();
    	  	
    	
    }
    @When("^check the leader board$")
    public void click_on_logon_button() throws Throwable {
    	//click on check you final score
    	driver.findElement(By.xpath("//button[text()='Check your final score']")).click(); 
    	Thread.sleep(500);
    	driver.quit();
    	
    }     
    
    
       
}