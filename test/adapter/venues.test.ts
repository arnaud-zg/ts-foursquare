import {
  adaptGetVenuesExplore,
  adaptGetVenuesSearch,
  adaptGetVenuesSuggestCompletion,
  adaptGetVenuesTrending,
} from '../../src/adapter/venues'
import { payload as payloadGetVenuesExplore } from '../epics/__mocks__/getVenuesExploreAsync.resolve'
import { payload as payloadGetVenuesSearch } from '../epics/__mocks__/getVenuesSearchAsync.resolve'
import { payload as payloadGetSuggestCompletion } from '../epics/__mocks__/getVenuesSuggestCompletionAsync.resolve'
import { payload as payloadGetVenuesTrending } from '../epics/__mocks__/getVenuesTrendingAsync.resolve'

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

describe('adapter/venues/adaptGetVenuesTrending', () => {
  it('should get an empty list', () => {
    expect(
      adaptGetVenuesTrending({
        ...payloadGetVenuesTrending,
        meta: {
          code: 400,
          requestId: payloadGetVenuesTrending.meta.requestId,
        },
      })
    ).toEqual([])
  })

  it('should get a list of venues', () => {
    expect(adaptGetVenuesTrending(payloadGetVenuesTrending)).toMatchSnapshot()
  })
})

describe('adapter/venues/adaptGetVenuesSuggestCompletion', () => {
  it('should get an empty list', () => {
    expect(
      adaptGetVenuesSuggestCompletion({
        ...payloadGetSuggestCompletion,
        meta: {
          code: 400,
          requestId: payloadGetSuggestCompletion.meta.requestId,
        },
      })
    ).toEqual([])
  })

  it('should get a list of minivenues', () => {
    expect(
      adaptGetVenuesSuggestCompletion(payloadGetSuggestCompletion)
    ).toMatchSnapshot()
  })
})
