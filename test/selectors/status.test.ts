import { getType } from 'typesafe-actions'
import { getVenuesSearchAsync } from '../../src/DEPRECATED_actions'
import { initialState } from '../../src/DEPRECATED_reducers/app'
import {
  statusModuleStateSelector,
  statusSelector,
} from '../../src/DEPRECATED_selectors/status'
import { NStore } from '../../types'

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
      statusModuleStateSelector(
        initialState,
        getType(getVenuesSearchAsync.request)
      )
    ).toMatchSnapshot()

    expect(
      statusModuleStateSelector(state, getType(getVenuesSearchAsync.request))
    ).toMatchSnapshot()
  })
})
