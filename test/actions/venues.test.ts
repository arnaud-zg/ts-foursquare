require('isomorphic-fetch')
import {
  EVenuesAction,
  requestGetVenuesSearch,
  resolveGetVenuesSearch,
} from '../../src/actions/venues'

describe('actions/venues', () => {
  it('should make a snapshot of EVenuesAction', () => {
    expect(EVenuesAction).toMatchSnapshot()
  })

  it('should create an action of type REQUEST_GET_VENUES_SEARCH', () => {
    expect(requestGetVenuesSearch({ ll: '40.7099,-73.9622' })).toMatchSnapshot()
    expect(
      requestGetVenuesSearch({ ll: '40.7099,-73.9622', intent: 'match' })
    ).toMatchSnapshot()
    expect(requestGetVenuesSearch({ query: 'ShopMart' })).toMatchSnapshot()
    expect(requestGetVenuesSearch({ near: 'Chicago, IL' })).toMatchSnapshot()
    expect(
      requestGetVenuesSearch({
        ll: '40.7099,-73.9622',
        query: 'ShopMart',
        intent: 'browse',
        radius: 500,
      })
    ).toMatchSnapshot()
  })

  it('should create an action of type RESOLVE_GET_VENUES_SEARCH', () => {
    expect(resolveGetVenuesSearch([])).toMatchSnapshot()
  })
})
