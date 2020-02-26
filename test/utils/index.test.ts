import * as utils from '../../src/utils'

describe('utils', () => {
  it('should have a list of method', () => {
    expect(utils).toMatchSnapshot()
  })
})
