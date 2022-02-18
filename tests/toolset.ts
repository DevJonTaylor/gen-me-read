
class TestTools {
  static isOf(isInstantiated: object, uninstantiatedClass: object) {
    it(`instanceof itself.`, () => {
      expect(isInstantiated).toBeInstanceOf(uninstantiatedClass);
    })
  }

  static isString(nameOfFunction: string, expectedResults: string, results: string) {
    it(`Testing ${nameOfFunction}`, () => {
      expect(results).toEqual(expectedResults);
    })
  }
}

function startTest(className: string, callback: Function) {
  describe(`Testing Class ${className}`, () => {
    callback(TestTools);
  });
}
export { startTest, TestTools }