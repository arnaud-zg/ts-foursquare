import { adaptGetVenuesSearch } from '../../src/adapter/venues'
import { payload } from '../epics/__mocks__/getVenuesSearchAsync.resolve'

describe('adapter/venues/adaptGetVenuesSearch', () => {
  it('should get an empty list', () => {
    expect(
      adaptGetVenuesSearch({
        ...payload,
        meta: {
          code: 400,
          requestId: payload.meta.requestId,
        },
      })
    ).toEqual([])
  })

  it('should get a list of venues', () => {
    expect(adaptGetVenuesSearch(payload)).toMatchSnapshot()
  })
})
