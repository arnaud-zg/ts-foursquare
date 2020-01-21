import { venuesActions } from '../../src/DEPRECATED_actions/venues'
require('isomorphic-fetch')

describe('actions/venues', () => {
  it('should make a snapshot of venuesActions', () => {
    expect(venuesActions).toMatchSnapshot()
  })
})
