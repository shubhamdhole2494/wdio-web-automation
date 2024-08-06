import { $ } from '@wdio/globals'
import Page from './page.js';
import { config } from '../../wdio.conf.js';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    
    get btnSubmit () {
        return $('button[type="submit"]');
    }
    get acceptCookiebtn (){
        return $('//button[@id="onetrust-accept-btn-handler"]');
    }
    get edAssistBtn(){
        return $('//a[contains(text(),"EdAssist Solutions for Employers")]');
    }
    get learnBtn(){
        return $('//body/main[@id="mainContent"]/section[4]/div[2]/section[3]/div[2]/span[1]/a[1]');
    }
    get allComment(){
        return $$('//div[@class="slick-slide"] | //div[@class="slick-slide slick-current slick-active"]');
    }
    get allDot(){
        return $$('//ul[@class="slick-dots"]/li');
    }
    get logo(){
        return $('//body/nav[1]/div[3]/div[3]/a[1]/img[1]');
    }
    get searchBtn(){
        return $('//body/nav[1]/div[3]/ul[1]/li[10]/a[1]');
    }
    get searchPlaceholder(){
        return $('//body[1]/nav[1]/div[3]/ul[1]/li[10]/nav[1]/div[1]/div[1]/div[1]/div[3]/form[1]/input[1]');
    }
    get searchBtn1(){
        return $('//body/nav[1]/div[3]/ul[1]/li[10]/nav[1]/div[1]/div[1]/div[1]/div[3]/form[1]/button[1]');
    }
    get searchResult(){
        return $('//h3[contains(text(),"Employee Education in 2018: Strategies to Watch")]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
    async setup(){
        //browser.maximizeWindow();
        browser.url(config.baseUrl);
        await(await this.acceptCookiebtn).waitForDisplayed({timeout:80000});
        (await this.acceptCookiebtn).click();
    }

    async clickOnAdAssistBtn(){
        await(await this.edAssistBtn).waitForDisplayed({timeout:80000});
        (await this.edAssistBtn).click();
    }

    async clickOnLearnBtn(){
        await(await this.learnBtn).waitForDisplayed({timeout:80000});
        (await this.learnBtn).click();
    }

    async verifyUrl(){
        await expect(browser).toHaveUrl("https://www.brighthorizons.com/edassist-solutions");
    }

    async clickOnLogo(){
        await(await this.logo).waitForDisplayed({timeout:80000});
        (await this.logo).click();
    }

    async clickOnSearchBtn(){
        await(await this.searchBtn).waitForDisplayed({timeout:80000});
        (await this.searchBtn).click();
    }
    
    async passValueToSearch(){
        await(await this.searchPlaceholder).waitForDisplayed({timeout:80000});
        await (await this.searchPlaceholder).click();
        (await this.searchPlaceholder).setValue('Employee Education in 2018: Strategies to Watch');
    }

    async clickOnSearchBtn1(){
        await(await this.searchBtn1).waitForDisplayed({timeout:80000});
        await(await this.searchBtn1).click();
    }

    async getTextSearchResult(){
        await(await this.searchResult).waitForDisplayed({timeout:80000});
        return (await this.searchResult).getValue();
    }
    
}

export default new LoginPage();
