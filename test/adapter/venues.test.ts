import {
  adaptGetVenuesLikes,
  adaptGetVenuesCategories,
  adaptGetVenuesExplore,
  adaptGetVenuesSearch,
  adaptGetVenuesSuggestCompletion,
  adaptGetVenuesTrending,
} from '../../src/adapter/venues'
import { payload as payloadGetVenuesCategories } from '../epics/__mocks__/getVenuesCategoriesAsync.resolve'
import { payload as payloadGetVenuesExplore } from '../epics/__mocks__/getVenuesExploreAsync.resolve'
import { payload as payloadGetVenuesLikes } from '../epics/__mocks__/getVenuesLikesAsync.resolve'
import { payload as payloadGetVenuesSearch } from '../epics/__mocks__/getVenuesSearchAsync.resolve'
import { payload as payloadGetSuggestCompletion } from '../epics/__mocks__/getVenuesSuggestCompletionAsync.resolve'
import { payload as payloadGetVenuesTrending } from '../epics/__mocks__/getVenuesTrendingAsync.resolve'

describe('adapter/venues/adaptGetVenuesCategories', () => {
  it('should get an empty list', () => {
    expect(
      adaptGetVenuesCategories({
        ...payloadGetVenuesCategories,
        meta: {
          code: 400,
          requestId: payloadGetVenuesCategories.meta.requestId,
        },
      })
    ).toEqual([])
  })

  it('should get a list of categories', () => {
    expect(
      adaptGetVenuesCategories(payloadGetVenuesCategories)
    ).toMatchSnapshot()
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

describe('adapter/venues/adaptGetVenuesLikes', () => {
  it('should get an empty list', () => {
    expect(
      adaptGetVenuesLikes({
        ...payloadGetVenuesLikes,
        meta: {
          code: 400,
          requestId: payloadGetVenuesLikes.meta.requestId,
        },
      })
    ).toEqual({ count: 0, items: [], summary: '0 Likes' })
  })

  it('should get a list of venues likes', () => {
    expect(adaptGetVenuesLikes(payloadGetVenuesLikes)).toMatchSnapshot()
  })
})

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
