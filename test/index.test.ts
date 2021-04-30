describe('jest created', () => {
  test.todo('jest');

  test('jest global variables set', () => {
    expect(global.TEST_GLOBAL_STRING).toBe("test-global-string")
  })

});
