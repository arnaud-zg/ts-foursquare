import { EVenuesAction } from '../../src/actions'
import { initialState } from '../../src/reducers/app'
import { moduleStateSelector, statusSelector } from '../../src/selectors/status'
import { NStore } from '../../types/store'

const state: NStore.IState = {
  ...initialState,
  status: {
    [EVenuesAction.GET_VENUES_SEARCH_REQUEST]: {
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
      moduleStateSelector(initialState, EVenuesAction.GET_VENUES_SEARCH_REQUEST)
    ).toMatchSnapshot()

    expect(
      moduleStateSelector(state, EVenuesAction.GET_VENUES_SEARCH_REQUEST)
    ).toMatchSnapshot()
  })
})
