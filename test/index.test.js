import { sum, NxtReaderCore } from '../src/main'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Nxt-Reader-Core Can be Created', () => {
  const NxtReaderCoreConstrutor = jest.fn(_ => new NxtReaderCore())
  const NxtReaderCoreInstance = NxtReaderCoreConstrutor()
  expect(NxtReaderCoreConstrutor).toReturn()
  expect(NxtReaderCoreInstance).toBeInstanceOf(NxtReaderCore)
  expect(NxtReaderCoreInstance).toHaveProperty('version')
  expect(NxtReaderCoreInstance.version).toMatch(/^\d\.\d\.\d$/)
})
