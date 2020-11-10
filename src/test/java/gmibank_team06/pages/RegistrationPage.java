package gmibank_team06.pages;

import gmibank_team06.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;


public class RegistrationPage {
    public RegistrationPage(){

        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy (xpath = "//a[@aria-haspopup='true']")
    public WebElement userIcon;

    @FindBy (xpath = "//input[@name='ssn']")
    public WebElement ssnTextBox;

    @FindBy (xpath = "//input[@name='firstname']")
    public WebElement nameTextBox;

    @FindBy (xpath = "//input[@name='lastname']")
    public WebElement lastnameTextBox;

    @FindBy (xpath = "//input[@name='address']")
    public WebElement address;

    @FindBy (xpath = "//input[@name='mobilephone']")
    public WebElement mobilePhone;

    @FindBy (xpath = "//input[@name='username']")
    public WebElement username;

    @FindBy (xpath = "//input[@name='email']")
    public WebElement email;

    @FindBy (xpath = "//input[@name='firstPassword']")
    public WebElement newPassword;

    @FindBy (xpath = "//input[@name='secondPassword']")
    public WebElement confirmationPassword;

    @FindBy (xpath = "//button[@type='submit']")
    public WebElement registerButton;

    public void select_list(String Register){
        Select statusDropdown=new Select(userIcon);
        statusDropdown.selectByVisibleText("Register");
    }

}



