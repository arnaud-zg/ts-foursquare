import { StateObservable } from 'redux-observable'
import { Subject } from 'rxjs/internal/Subject'
import { getListsAsync } from '../../src/DEPRECATED_actions'
import { initialState } from '../../src/DEPRECATED_reducers'
import { getObservableLists } from '../../src/services'
import { NStore } from '../../types'

describe('services/getObservableLists', () => {
  it('should get an observable instance', () => {
    const action = getListsAsync.request({ listId: '5580721e498e7c48540bf83f' })
    const state$: StateObservable<NStore.IState> = new StateObservable(
      new Subject(),
      initialState
    )

    expect(getObservableLists({ action, state$ })).toMatchSnapshot()
  })
})
