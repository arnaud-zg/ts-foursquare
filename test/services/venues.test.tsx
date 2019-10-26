import { StateObservable } from 'redux-observable'
import { Subject } from 'rxjs/internal/Subject'
import {
  getVenuesExploreAsync,
  getVenuesLikesAsync,
  getVenuesListedAsync,
  getVenuesNextVenuesAsync,
  getVenuesSearchAsync,
  getVenuesSimilarAsync,
  getVenuesSuggestCompletionAsync,
  getVenuesTrendingAsync,
} from '../../src/actions'
import { initialState } from '../../src/reducers'
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
import { NStore } from '../../types'

describe('services/getObservableVenuesCategories', () => {
  it('should get an observable instance', () => {
    const state$: StateObservable<NStore.IState> = new StateObservable(
      new Subject(),
      initialState
    )

    expect(getObservableVenuesCategories({ state$ })).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesExplore', () => {
  it('should get an observable instance', () => {
    const action = getVenuesExploreAsync.request({ ll: '40.7099,-73.9622' })
    const state$: StateObservable<NStore.IState> = new StateObservable(
      new Subject(),
      initialState
    )

    expect(getObservableVenuesExplore({ action, state$ })).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesLikes', () => {
  it('should get an observable instance', () => {
    const action = getVenuesLikesAsync.request({
      venueId: '3fd66200f964a5209beb1ee3',
    })
    const state$: StateObservable<NStore.IState> = new StateObservable(
      new Subject(),
      initialState
    )

    expect(getObservableVenuesLikes({ action, state$ })).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesListed', () => {
  it('should get an observable instance', () => {
    const action = getVenuesListedAsync.request({
      venueId: '3fd66200f964a5209beb1ee3',
    })
    const state$: StateObservable<NStore.IState> = new StateObservable(
      new Subject(),
      initialState
    )

    expect(getObservableVenuesListed({ action, state$ })).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesNextVenues', () => {
  it('should get an observable instance', () => {
    const action = getVenuesNextVenuesAsync.request({
      venueId: '3fd66200f964a5209beb1ee3',
    })
    const state$: StateObservable<NStore.IState> = new StateObservable(
      new Subject(),
      initialState
    )

    expect(getObservableVenuesNextVenues({ action, state$ })).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesSearch', () => {
  it('should get an observable instance', () => {
    const action = getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' })
    const state$: StateObservable<NStore.IState> = new StateObservable(
      new Subject(),
      initialState
    )

    expect(getObservableVenuesSearch({ action, state$ })).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesSimilar', () => {
  it('should get an observable instance', () => {
    const action = getVenuesSimilarAsync.request({
      venueId: '3fd66200f964a5209beb1ee3',
    })
    const state$: StateObservable<NStore.IState> = new StateObservable(
      new Subject(),
      initialState
    )

    expect(getObservableVenuesSimilar({ action, state$ })).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesSuggestCompletion', () => {
  it('should get an observable instance', () => {
    const action = getVenuesSuggestCompletionAsync.request({
      ll: '40.7099,-73.9622',
      query: 'Burger',
    })
    const state$: StateObservable<NStore.IState> = new StateObservable(
      new Subject(),
      initialState
    )

    expect(
      getObservableVenuesSuggestCompletion({ action, state$ })
    ).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesTrending', () => {
  it('should get an observable instance', () => {
    const action = getVenuesTrendingAsync.request({ ll: '40.7099,-73.9622' })
    const state$: StateObservable<NStore.IState> = new StateObservable(
      new Subject(),
      initialState
    )

    expect(getObservableVenuesTrending({ action, state$ })).toMatchSnapshot()
  })
})
