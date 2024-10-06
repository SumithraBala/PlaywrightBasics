import { test, expect } from '@playwright/test'

test('selector demo test', async ({ page }) => {
    await page.goto("https://www.saucedemo.com")
    //await page.pause()
    //using object properties
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('standard_user')
    await page.click('id=password')
    await page.locator('id=password').fill('secret_sauce') 
    //using css selectiors 
    await page.locator('#login-button').click()

    

})