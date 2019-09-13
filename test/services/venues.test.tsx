import { StateObservable } from 'redux-observable'
import { Subject } from 'rxjs/internal/Subject'
import { getVenuesSearchAsync, getVenuesExploreAsync } from '../../src/actions'
import { initialState } from '../../src/reducers'
import {
  getObservableVenuesSearch,
  getObservableVenuesExplore,
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
