import * as tsFoursquarePackage from '../src'

describe('tsFoursquarePackage', () => {
  it('should have a list of method', () => {
    expect(tsFoursquarePackage).toMatchSnapshot()
  })
})
