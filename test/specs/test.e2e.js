import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Verify Comment text is equal to Dots', () => {
    it('Navigate to Web page and Maximize', async () => {
        await LoginPage.setup();
    });

    it('Verify URL when user navigate to edassist-solutions page', async () => {
        await LoginPage.clickOnAdAssistBtn();
        await LoginPage.clickOnLearnBtn();
        await LoginPage.verifyUrl();
    });

    it('Verify Count of comment equal to Dots', async () => {
       
        console.log(await LoginPage.allComment.length);
        let commentCount = await LoginPage.allComment.length;
        let dotCount = await LoginPage.allDot.length;
        await expect(commentCount).toStrictEqual(dotCount);
    });

    
});

describe('Verify Search Functinality', ()=>{
    it('Navigate to Web page and Maximize', async () => {
        await LoginPage.clickOnLogo();
    });

    it('Click on Search button', async () => {
        await LoginPage.clickOnSearchBtn();
    });

    it('Send search text', async () => {
        await LoginPage.passValueToSearch();
    });

    it('Click on Search Button', async () => {
        await LoginPage.clickOnSearchBtn1();
    });

    it('Get result Compare', async () => {
        const res = await $('//h3[contains(text(),"Employee Education in 2018: Strategies to Watch")]');
        const resValue = await res.getText();
        console.log(resValue);
        await expect(resValue).toStrictEqual('Employee Education in 2018: Strategies to Watch');
    });
})

