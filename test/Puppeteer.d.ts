import { Page, Browser, BrowserContext } from "puppeteer";

declare global {
  namespace NodeJS {
    interface Global {
      // from jest-puppeteer
      page: Page,
      browser: Browser,
      context: BrowserContext,

      // from globals in jest.config.js
      TEST_GLOBAL_STRING: string
    }
  }
  
  // page.evaluate 中的window对象
  interface Window {
    // from beforeAll
    connect: (request: IDBRequest) => Promise<any>
    TestDBName: string,
    TestDBVersion: number,
    TestTableName: string
  }
}