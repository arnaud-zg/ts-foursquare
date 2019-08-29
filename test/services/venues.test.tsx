import { StateObservable } from 'redux-observable'
import { requestGetVenuesSearch } from '../../src/actions'
import { getObservableVenuesSearch } from '../../src/services'
import { initialState } from '../../src/reducers'
import { NRoot } from '../../types/root'
import { Subject } from 'rxjs/internal/Subject'

describe('services/getObservableVenuesSearch', () => {
  it('should get an observable instance', () => {
    const action = requestGetVenuesSearch({ ll: '40.7099,-73.9622' })
    const state$: StateObservable<NRoot.IState> = new StateObservable(
      new Subject(),
      initialState
    )

    expect(getObservableVenuesSearch(action, state$)).toMatchSnapshot()
  })
})
