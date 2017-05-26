/* global describe:true, it:true */

const passwordList = require('../')
const assert = require('chai').assert

describe('rockyou', function () {
  it('returns a set of passwords, given a size', function () {
    const list = passwordList(5)
    const expected = new Set([
      '123456',
      '12345',
      '123456789',
      'password',
      'iloveyou',
      'princess',
      '1234567',
      '12345678',
      'abc123',
      'nicole',
      'daniel',
      'babygirl',
      'monkey'
    ])

    assert.typeOf(list, 'Set', 'it returns a Set')
    assert.strictEqual(list.size, expected.size, 'it is the expected size')
    assert.hasAllKeys(list, Array.from(expected.keys()), 'it has the expected elements')
  })
})
