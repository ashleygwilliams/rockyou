/* global describe:true, it:true */

const passwordList = require('../')
const assert = require('chai').assert

describe('rockyou', function () {
  it('returns an array, given a size', function () {
    const list = passwordList(5)
    const expected = [
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
    ]

    assert.typeOf(list, 'Array')
    assert.lengthOf(list, expected.length)
    assert.equal(list[0], expected[0])
  })
})
