import { adaptGetVenuesSearch } from '../../src/adapter/venues'
import { payload } from '../epics/__mocks__/resolveGetVenuesSearch'

describe('adapter/venues/adaptGetVenuesSearch', () => {
  it('should get an empty list', () => {
    adaptGetVenuesSearch({
      ...payload,
      meta: {
        code: 400,
        requestId: payload.meta.requestId,
      },
    })
  })

  it('should get a list of venues', () => {
    expect(adaptGetVenuesSearch(payload).length).toEqual(
      payload.response.venues.length
    )
  })
})
