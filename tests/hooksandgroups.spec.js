import { test, expect } from '@playwright/test'

test.describe("All tests",()=>{

    


test.beforeEach(async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    //await page.locator('[data-test="username"]').click();
    //await page.locator('[data-test="username"]').dblclick();
    await page.locator('[data-test="username"]').fill('standard_user');
    // await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    //await page.pause()
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html')

})

test('homepage', async ({ page }) => {

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="item-1-title-link"]').click();
    await page.locator('[data-test="add-to-cart"]').click();

}
)

test('logout', async ({ page }) => {

    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();


}
)

test.afterEach(async({ page })=> {
    await page.close()

})

})