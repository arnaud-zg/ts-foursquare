require('isomorphic-fetch')
import { EVenuesAction } from '../../src/actions/venues'

describe('actions/venues', () => {
  it('should make a snapshot of EVenuesAction', () => {
    expect(EVenuesAction).toMatchSnapshot()
  })
})
