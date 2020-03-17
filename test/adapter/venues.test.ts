import {
  adaptGetVenuesCategories,
  adaptGetVenuesExplore,
  adaptGetVenuesLikes,
  adaptGetVenuesListed,
  adaptGetVenuesNextVenues,
  adaptGetVenuesSearch,
  adaptGetVenuesSimilar,
  adaptGetVenuesSuggestCompletion,
  adaptGetVenuesTrending,
} from '../../src/adapter/venues'
import { payload as payloadGetVenuesCategories } from '../actions/__mocks__/getVenuesCategories.resolve'
import { payload as payloadGetVenuesExplore } from '../actions/__mocks__/getVenuesExplore.resolve'
import { payload as payloadGetVenuesLikes } from '../actions/__mocks__/getVenuesLikes.resolve'
import { payload as payloadGetVenuesListed } from '../actions/__mocks__/getVenuesListed.resolve'
import { payload as payloadGetVenuesNextVenues } from '../actions/__mocks__/getVenuesNextVenues.resolve'
import { payload as payloadGetVenuesSearch } from '../actions/__mocks__/getVenuesSearch.resolve'
import { payload as payloadGetVenuesSimilar } from '../actions/__mocks__/getVenuesSimilar.resolve'
import { payload as payloadGetSuggestCompletion } from '../actions/__mocks__/getVenuesSuggestCompletion.resolve'
import { payload as payloadGetVenuesTrending } from '../actions/__mocks__/getVenuesTrending.resolve'

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
  it('should get an empty list', () => {
    expect(
      adaptGetVenuesExplore({
        ...payloadGetVenuesExplore,
        meta: {
          code: 400,
          requestId: payloadGetVenuesSearch.meta.requestId,
        },
      })
    ).toEqual([])

    expect(
      adaptGetVenuesExplore({
        ...payloadGetVenuesExplore,
        response: {
          ...payloadGetVenuesExplore.response,
          groups: [],
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

describe('adapter/venues/adaptGetVenuesListed', () => {
  it('should get an empty list', () => {
    expect(
      adaptGetVenuesListed({
        ...payloadGetVenuesListed,
        meta: {
          code: 400,
          requestId: payloadGetVenuesListed.meta.requestId,
        },
      })
    ).toEqual({ count: 0, groups: [] })
  })

  it('should get a list that this venue appears on', () => {
    expect(adaptGetVenuesListed(payloadGetVenuesListed)).toMatchSnapshot()
  })
})

describe('adapter/venues/adaptGetVenuesNextVenues', () => {
  it('should get an empty list', () => {
    expect(
      adaptGetVenuesNextVenues({
        ...payloadGetVenuesNextVenues,
        meta: {
          code: 400,
          requestId: payloadGetVenuesNextVenues.meta.requestId,
        },
      })
    ).toEqual([])
  })

  it('should get a list of venues likes', () => {
    expect(
      adaptGetVenuesNextVenues(payloadGetVenuesNextVenues)
    ).toMatchSnapshot()
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

describe('adapter/venues/adaptGetVenuesSimilar', () => {
  it('should get an empty list', () => {
    expect(
      adaptGetVenuesSimilar({
        ...payloadGetVenuesSimilar,
        meta: {
          code: 400,
          requestId: payloadGetVenuesSimilar.meta.requestId,
        },
      })
    ).toEqual([])
  })

  it('should get a list of venues', () => {
    expect(adaptGetVenuesSimilar(payloadGetVenuesSimilar)).toMatchSnapshot()
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
