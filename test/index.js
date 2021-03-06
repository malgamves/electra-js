const assert = require('assert')

const ElectraJs = require('..')

function testMethodType(name, method) {
  describe(`ElectraJs#${name}()`, function() {
    it('SHOULD be a method', function() {
      assert.strictEqual(typeof method, 'function')
    })
  })
}

describe('Javascript', function() {
  describe('Basics', function() {
    const electraJs = new ElectraJs({ isHard: true })

    testMethodType('getVersion', electraJs.getVersion)

    testMethodType('webServices#getCurrentPriceIn', electraJs.webServices.getCurrentPriceIn)
  })
})
