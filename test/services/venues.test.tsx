import { StateObservable } from 'redux-observable'
import { getVenuesSearchAsync } from '../../src/actions'
import { getObservableVenuesSearch } from '../../src/services'
import { initialState } from '../../src/reducers'
import { NStore } from '../../types/root'
import { Subject } from 'rxjs/internal/Subject'

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
