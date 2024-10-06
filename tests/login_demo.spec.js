import { test, expect } from '@playwright/test'

test('demo login test1', async ({ page }) => {

    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.getByPlaceholder('Enter your username').fill('Sumithra')
    await page.getByPlaceholder('Enter your password').fill('123456')
    await page.getByRole('link', { name: 'Sign in' }).click()

})

test('demo login test2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', { name: 'Login' }).click()
})


test.only('demo login test3', async ({ page }) => {
   await page.pause()
   const context = await browser.newContext();
  await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('admin@yourstore.com');
  await page.getByLabel('Password:').dblclick();
  await page.getByLabel('Password:').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  
})