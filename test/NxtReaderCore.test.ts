import { NxtReaderCore } from '../src/main'
import Controller from '../src/controller/index'

describe('Nxt-Reader-Core', () => {

  let NxtReaderCoreInstance: NxtReaderCore = null

  describe('Nxt-Reader-Core Construtor', () => {

    test('Nxt-Reader-Core can be created without args', () => {
      const NxtReaderCoreConstrutor = jest.fn(() => new NxtReaderCore())
      NxtReaderCoreInstance = NxtReaderCoreConstrutor()
      expect(NxtReaderCoreConstrutor).toReturn()
      expect(NxtReaderCoreInstance).toBeInstanceOf(NxtReaderCore)
    })

  })

  describe('Nxt-Reader-Core version', () => {

    test('Nxt-Reader-Core have version', () => {
      expect(NxtReaderCoreInstance).toHaveProperty('version')
    })

    test('Nxt-Reader-Core version valid', () => {
      expect(NxtReaderCoreInstance.version).toMatch(/^\d\.\d\.\d$/)
    })

  })

  describe('Nxt-Reader-Core use function', () => {

    test('Nxt-Reader-Core use function exist', () => {
      expect(NxtReaderCoreInstance).toHaveProperty('use')
      expect(NxtReaderCoreInstance.use).toBeInstanceOf(Function)
    })

    test.todo('Nxt-Reader-Core can use plugins')

  })


  describe('Nxt-Reader-Core init function', () => {

    test('Nxt-Reader-Core init function exist', () => {
      expect(NxtReaderCoreInstance).toHaveProperty('init')
      expect(NxtReaderCoreInstance.init).toBeInstanceOf(Function)
    })

    test('Nxt-Reader-Core init function callable', () => {
      const initFn = jest.fn(() => NxtReaderCoreInstance.init())
      initFn()
    })

    test('Nxt-Reader-Core init function success', () => {
      expect(NxtReaderCoreInstance).toHaveProperty('instance')
      expect(NxtReaderCoreInstance.instance).not.toBeNull()
      expect(NxtReaderCoreInstance.instance).toBeInstanceOf(Controller)
    })

  })

  describe('Nxt-Reader-Core getVersion function', () => {

    test('Nxt-Reader-Core getVersion function exist', () => {
      expect(NxtReaderCoreInstance).toHaveProperty('getVersion')
      expect(NxtReaderCoreInstance.getVersion).toBeInstanceOf(Function)
    })

    const getVersionFn = jest.fn(() => NxtReaderCoreInstance.getVersion())

    test('Nxt-Reader-Core getVersion function returns', () => {
      const result = getVersionFn()
      expect(getVersionFn).toHaveReturned()
      expect(result).toHaveProperty('controller')
      expect(result.controller).toMatch(/^\d\.\d\.\d$/)
    })

    const result = ['controller']
    test.each(result)('component [%s] version valid', prop => {
      const version: {[prop: string]: string} = NxtReaderCoreInstance.getVersion()
      expect(version[prop]).toMatch(/^\d\.\d\.\d$/)
    })

  })

})
