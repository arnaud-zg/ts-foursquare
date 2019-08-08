require('isomorphic-fetch')
import {
  requestGetVenuesSearch,
  resolveGetVenuesSearch,
} from '../../src/actions/venues'

describe('actions.venues', () => {
  it('should create an action of type REQUEST_GET_VENUES_SEARCH', () => {
    expect(requestGetVenuesSearch({})).toMatchSnapshot()
  })

  it('should create an action of type RESOLVE_GET_VENUES_SEARCH', () => {
    expect(resolveGetVenuesSearch({})).toMatchSnapshot()
  })
})
