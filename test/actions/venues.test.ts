import { EVenuesAction } from '../../src/actions/venues'
require('isomorphic-fetch')

describe('actions/venues', () => {
  it('should make a snapshot of EVenuesAction', () => {
    expect(EVenuesAction).toMatchSnapshot()
  })
})
