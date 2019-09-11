import { StateObservable } from 'redux-observable'
import { Subject } from 'rxjs/internal/Subject'
import { getVenuesSearchAsync } from '../../src/actions'
import { initialState } from '../../src/reducers'
import { getObservableVenuesSearch } from '../../src/services'
import { NRoot } from '../../types/root'

describe('services/getObservableVenuesSearch', () => {
  it('should get an observable instance', () => {
    const action = getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' })
    const state$: StateObservable<NRoot.IState> = new StateObservable(
      new Subject(),
      initialState
    )

    expect(getObservableVenuesSearch(action, state$)).toMatchSnapshot()
  })
})
