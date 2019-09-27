import { StateObservable } from 'redux-observable'
import { Subject } from 'rxjs/internal/Subject'
import {
  getVenuesExploreAsync,
  getVenuesSearchAsync,
  getVenuesSuggestCompletionAsync,
  getVenuesTrendingAsync,
} from '../../src/actions'
import { initialState } from '../../src/reducers'
import {
  getObservableVenuesExplore,
  getObservableVenuesSearch,
  getObservableVenuesSuggestCompletion,
  getObservableVenuesTrending,
} from '../../src/services'
import { NStore } from '../../types/store'

describe('services/getObservableVenuesSearch', () => {
  it('should get an observable instance', () => {
    const action = getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' })
    const state$: StateObservable<NStore.IState> = new StateObservable(
      new Subject(),
      initialState
    )

    expect(getObservableVenuesSearch(action, state$)).toMatchSnapshot()
  })
})

describe('services/getObservableVenuesExplore', () => {
  it('should get an observable instance', () => {
    const action = getVenuesExploreAsync.request({ ll: '40.7099,-73.9622' })
    const state$: StateObservable<NStore.IState> = new StateObservable(
      new Subject(),
      initialState
    )

    expect(getObservableVenuesExplore(action, state$)).toMatchSnapshot()
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
      getObservableVenuesSuggestCompletion(action, state$)
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

    expect(getObservableVenuesTrending(action, state$)).toMatchSnapshot()
  })
})
