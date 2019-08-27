import { resolveGetVenuesSearch } from '../../src/actions/venues'
import { initialState, venuesReducer } from '../../src/reducers/venues'
import { payload } from '../epics/__mocks__/resolveGetVenuesSearch'

describe('reducers/venues', () => {
  test.each`
    scenario                                                    | action
    ${'should get state after action.resolveGetVenuesSearch()'} | ${resolveGetVenuesSearch(payload.response.venues)}
  `('$scenario with action: $action', ({ action }) => {
    expect(venuesReducer(initialState, action)).toMatchSnapshot()
  })
})
