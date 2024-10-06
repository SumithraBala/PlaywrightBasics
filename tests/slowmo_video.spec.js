import { test, expect, chromium } from '@playwright/test'

test('slow motion and video demo test', async () => {
    const browser= await chromium.launch({
        slowMo:500,
        headless:false 
    })
    const context= await browser.newContext({

        recordVideo:{
            dir:"recordedVideos",
            size:{width:800,height:600}
        }
    })
    const page=await context.newPage()

    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.getByPlaceholder('Enter your username').fill('Sumithra')
    await page.getByPlaceholder('Enter your password').fill('123456')
    await page.getByRole('link', { name: 'Sign in' }).click()
    await context.close()
    

})