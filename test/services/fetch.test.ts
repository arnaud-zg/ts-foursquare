import { getDefaultRequestParameters } from '../../src/services/fetch'
import { StateObservable } from 'redux-observable'
import { NStore } from '../../types/store'
import { initialState } from '../../src/reducers'
import { Subject } from 'rxjs'

describe('utils/fetch/getDefaultRequestParameters', () => {
  it('should get default request parameters', () => {
    const state$: StateObservable<NStore.IState> = new StateObservable(
      new Subject(),
      {
        ...initialState,
        life: {
          ...initialState.life,
          credentials: {
            ...initialState.life.credentials,
            clientId: '123',
            clientSecret: '456',
          },
        },
      }
    )

    expect(getDefaultRequestParameters(state$)).toMatchSnapshot()
  })
})
