import { StateObservable } from 'redux-observable'
import { Subject } from 'rxjs/internal/Subject'
import { getPhotosDetailsAsync } from '../../src/DEPRECATED_actions'
import { initialState } from '../../src/DEPRECATED_reducers'
import { getObservablePhotosDetails } from '../../src/services'
import { NStore } from '../../types'

describe('services/getObservablePhotosDetails', () => {
  it('should get an observable instance', () => {
    const action = getPhotosDetailsAsync.request({
      photoId: '51e4151c498e60b5d17bc721',
    })
    const state$: StateObservable<NStore.IState> = new StateObservable(
      new Subject(),
      initialState
    )

    expect(getObservablePhotosDetails({ action, state$ })).toMatchSnapshot()
  })
})
