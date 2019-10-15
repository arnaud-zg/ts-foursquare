import { getType } from 'typesafe-actions'
import { getVenuesSearchAsync } from '../../src/actions'
import { initialState } from '../../src/reducers/app'
import { moduleStateSelector, statusSelector } from '../../src/selectors/status'
import { NStore } from '../../types/store.d'

const state: NStore.IState = {
  ...initialState,
  status: {
    [getType(getVenuesSearchAsync.request)]: {
      hasError: false,
      isCancelled: false,
      isLoading: false,
    },
  },
}

describe('selectors/status', () => {
  it('should get status', () => {
    expect(statusSelector(state)).toMatchSnapshot()
  })

  it('should get module state', () => {
    expect(
      moduleStateSelector(initialState, getType(getVenuesSearchAsync.request))
    ).toMatchSnapshot()

    expect(
      moduleStateSelector(state, getType(getVenuesSearchAsync.request))
    ).toMatchSnapshot()
  })
})
