import { EVenuesAction } from '../../src/actions/venues'
import { venuesReducer } from '../../src/reducers/venues'
import { payload } from '../epics/__mocks__/resolveGetVenuesSearch'

const action = {
  payload: payload.response.venues,
  type: EVenuesAction.RESOLVE_GET_VENUES_SEARCH,
}

describe('reducers/venues', () => {
  test.each`
    scenario                            | state             | action
    ${'should get state after $action'} | ${{ venues: [] }} | ${action}
  `('$scenario with action: $action', ({ state, action }) => {
    expect(venuesReducer(state, action)).toMatchSnapshot()
  })
})
