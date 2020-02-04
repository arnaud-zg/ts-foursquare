import {
  getVenuesExploreAsync,
  getVenuesLikesAsync,
  getVenuesListedAsync,
  getVenuesNextVenuesAsync,
  getVenuesSearchAsync,
  getVenuesSimilarAsync,
  getVenuesSuggestCompletionAsync,
  getVenuesTrendingAsync,
} from '../../src/DEPRECATED_actions'
import {
  getObservableVenuesCategories,
  getObservableVenuesExplore,
  getObservableVenuesLikes,
  getObservableVenuesListed,
  getObservableVenuesNextVenues,
  getObservableVenuesSearch,
  getObservableVenuesSimilar,
  getObservableVenuesSuggestCompletion,
  getObservableVenuesTrending,
} from '../../src/services'

describe('services/getObservableVenuesCategories', () => {
  it('should get an observable instance', () => {
    expect(getObservableVenuesCategories({})).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesExplore', () => {
  it('should get an observable instance', () => {
    const action = getVenuesExploreAsync.request({ ll: '40.7099,-73.9622' })

    expect(getObservableVenuesExplore({ action })).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesLikes', () => {
  it('should get an observable instance', () => {
    const action = getVenuesLikesAsync.request({
      venueId: '3fd66200f964a5209beb1ee3',
    })

    expect(getObservableVenuesLikes({ action })).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesListed', () => {
  it('should get an observable instance', () => {
    const action = getVenuesListedAsync.request({
      venueId: '3fd66200f964a5209beb1ee3',
    })

    expect(getObservableVenuesListed({ action })).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesNextVenues', () => {
  it('should get an observable instance', () => {
    const action = getVenuesNextVenuesAsync.request({
      venueId: '3fd66200f964a5209beb1ee3',
    })

    expect(getObservableVenuesNextVenues({ action })).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesSearch', () => {
  it('should get an observable instance', () => {
    const action = getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' })

    expect(getObservableVenuesSearch({ action })).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesSimilar', () => {
  it('should get an observable instance', () => {
    const action = getVenuesSimilarAsync.request({
      venueId: '3fd66200f964a5209beb1ee3',
    })

    expect(getObservableVenuesSimilar({ action })).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesSuggestCompletion', () => {
  it('should get an observable instance', () => {
    const action = getVenuesSuggestCompletionAsync.request({
      ll: '40.7099,-73.9622',
      query: 'Burger',
    })

    expect(getObservableVenuesSuggestCompletion({ action })).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesTrending', () => {
  it('should get an observable instance', () => {
    const action = getVenuesTrendingAsync.request({ ll: '40.7099,-73.9622' })

    expect(getObservableVenuesTrending({ action })).toMatchSnapshot()
  })
})
