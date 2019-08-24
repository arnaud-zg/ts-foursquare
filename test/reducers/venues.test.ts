import { EVenuesAction } from '../../src/actions/venues'
import { initialState, venuesReducer } from '../../src/reducers/venues'
import { payload } from '../epics/__mocks__/resolveGetVenuesSearch'

const action = {
  payload: payload.response.venues,
  type: EVenuesAction.RESOLVE_GET_VENUES_SEARCH,
}

describe('reducers/venues', () => {
  test.each`
    scenario                            | initialState    | action
    ${'should get state after $action'} | ${initialState} | ${action}
  `('$scenario with action: $action', ({ initialState, action }) => {
    expect(venuesReducer(initialState, action)).toMatchSnapshot()
  })
})
