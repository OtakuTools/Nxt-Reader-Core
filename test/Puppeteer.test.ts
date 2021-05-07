// https://github.com/smooth-code/jest-puppeteer
// 由jest-puppeteer注入page等全局变量

// 注入puppeteer相关expect
import 'expect-puppeteer'

// 引入类型
import { PuppeteerNode, JSHandle } from 'puppeteer'
interface TestTableObj {
  id: number
  name?: string
  age?: number
  email?: string
  [key: string]: string | number | boolean
}

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

describe('Indexed-db', () => {
  
  let indexedDB: JSHandle = null

  const TestDBName = 'Nxt-Core-Reader-DB'
  const TestDBVersion = 1
  const TestTableName = 'Nxt-Core-Reader-Test-Table'

  beforeAll(async () => {
    indexedDB = await global.page.evaluateHandle(async (dbName: string, version: number, tableName: string) => {

      // 注入全局变量
      window.connect = function connect(request: IDBRequest): Promise<any> {
        return new Promise((resolve, reject) => {
          request.onsuccess = function () {
            resolve(request.result)
          }
          request.onerror = function (err) {
            reject(err)
          }
        })
      }
      window.TestDBName = dbName
      window.TestDBVersion = version
      window.TestTableName = tableName
      
      const request = window.indexedDB.open(dbName, version)
      request.onupgradeneeded = function () {
          const db = request.result
          if (!db.objectStoreNames.contains(tableName)) {
            db.createObjectStore(tableName, { keyPath: 'id' })
          }
        }
      const result = await window.connect(request)
      return Promise.resolve(result)
    }, TestDBName, TestDBVersion, TestTableName)
    
  })
  
  test('open', async () => {
    const {dbName, version, tableNames} = await global.page.evaluate(async (indexedDB: IDBDatabase) => {
      const dbName = indexedDB.name
      const version = indexedDB.version
      const tableNames = Array(indexedDB.objectStoreNames.length).fill(0).map((_, idx) => indexedDB.objectStoreNames.item(idx))
      return Promise.resolve({ dbName, version, tableNames })
    }, indexedDB)
    expect(dbName).toBe(TestDBName)
    expect(version).toBe(TestDBVersion)
    expect(tableNames).toEqual([TestTableName])
  })

  test('read-write', async () => {
    const testObj:TestTableObj = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' }
    const result = await global.page.evaluate(async (indexedDB: IDBDatabase, tableName: string, testObj: TestTableObj) => {
      // 写表
      await window.connect(
        indexedDB.transaction([tableName], 'readwrite')
          .objectStore(tableName)
          .add(testObj)
      )

      // 读表
      const result:TestTableObj = await window.connect(
        indexedDB.transaction([tableName])
          .objectStore(tableName)
          .get(1)
      )
      return Promise.resolve(result)
    }, indexedDB, TestTableName, testObj)

    expect(result).toEqual(testObj)
  })
    
})
