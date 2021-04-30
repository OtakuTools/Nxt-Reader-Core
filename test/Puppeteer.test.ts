// https://github.com/smooth-code/jest-puppeteer
// 由jest-puppeteer注入page等全局变量

// 注入puppeteer相关expect
import 'expect-puppeteer'

// 引入类型
import { PuppeteerNode } from 'puppeteer'

describe('Puppeteer', () => {

  test('puppeteer imported', async () => {
    const puppeteer: PuppeteerNode = require('puppeteer')
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://cn.bing.com')
    await browser.close()
  })

  test('jest-puppeteer imported', async () => {
    await global.page.goto('https://www.baidu.com/')
    await expect(global.page).toMatch('baidu')
  })

})
