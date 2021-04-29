// https://github.com/smooth-code/jest-puppeteer
import 'expect-puppeteer'

describe('Puppeteer', () => {

  test('puppeteer imported', async () => {
    const puppeteer = require('puppeteer')
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://cn.bing.com')
    await browser.close()
  })

  test('jest-puppeteer imported', async () => {
    await page.goto('https://www.baidu.com/')
    await expect(page).toMatch('baidu')
  })

})
