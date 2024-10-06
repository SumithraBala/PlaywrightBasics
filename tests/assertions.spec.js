import { test, expect } from '@playwright/test'
import exp from 'constants'

test('assertion test', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/')
    
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()
    await expect(page.getByRole('link', { name: 'Canvas' })).toBeEnabled()
    //await expect.soft(page.getByRole('link', { name: 'Select' })).toBeDisabled()

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText("The Kitchen")
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText("xyz")
    
  
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class','chakra-heading css-dpmy2a')
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)
    // await page.pause()
    await expect(page).toHaveScreenshot()
})
