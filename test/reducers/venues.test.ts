import { getVenuesSearchAsync } from '../../src/actions/venues'
import { adaptGetVenuesSearch } from '../../src/adapter/venues'
import { initialState, venuesReducer } from '../../src/reducers/venues'
import { payload } from '../epics/__mocks__/resolveGetVenuesSearch'

describe('reducers/venues', () => {
  const action = getVenuesSearchAsync.success(adaptGetVenuesSearch(payload))

  test.each`
    scenario                                      | action
    ${`should get state after action: ${action}`} | ${action}
  `('$scenario with action: $action', ({ action }) => {
    expect(venuesReducer(initialState, action)).toMatchSnapshot()
  })
})
