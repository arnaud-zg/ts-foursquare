import {
  adaptGetVenuesExplore,
  adaptGetVenuesSearch,
} from '../../src/adapter/venues'
import { payload as payloadGetVenuesExplore } from '../epics/__mocks__/getVenuesExploreAsync.resolve'
import { payload as payloadGetVenuesSearch } from '../epics/__mocks__/getVenuesSearchAsync.resolve'

describe('adapter/venues/adaptGetVenuesSearch', () => {
  it('should get an empty list', () => {
    expect(
      adaptGetVenuesSearch({
        ...payloadGetVenuesSearch,
        meta: {
          code: 400,
          requestId: payloadGetVenuesSearch.meta.requestId,
        },
      })
    ).toEqual([])
  })

  it('should get a list of venues', () => {
    expect(adaptGetVenuesSearch(payloadGetVenuesSearch)).toMatchSnapshot()
  })
})

describe('adapter/venues/adaptGetVenuesExplore', () => {
  it('should return null', () => {
    expect(
      adaptGetVenuesExplore({
        ...payloadGetVenuesExplore,
        meta: {
          code: 400,
          requestId: payloadGetVenuesSearch.meta.requestId,
        },
      })
    ).toEqual([])
  })

  it('should get result', () => {
    expect(adaptGetVenuesExplore(payloadGetVenuesExplore)).toMatchSnapshot()
  })
})
