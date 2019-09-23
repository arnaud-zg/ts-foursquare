import {
  getVenuesExploreAsync,
  getVenuesSearchAsync,
  getVenuesTrendingAsync,
} from '../../src/actions/venues'
import {
  adaptGetVenuesExplore,
  adaptGetVenuesSearch,
  adaptGetVenuesTrending,
} from '../../src/adapter/venues'
import { initialState, venuesReducer } from '../../src/reducers/venues'
import { payload as payloadGetVenuesExplore } from '../epics/__mocks__/getVenuesExploreAsync.resolve'
import { payload as payloadGetVenuesSearch } from '../epics/__mocks__/getVenuesSearchAsync.resolve'
import { payload as payloadGetVenuesTrending } from '../epics/__mocks__/getVenuesTrendingAsync.resolve'

describe('reducers/venues/getVenuesSearchAsync', () => {
  const action = getVenuesSearchAsync.success(
    adaptGetVenuesSearch(payloadGetVenuesSearch)
  )

  test.each`
    scenario                                                      | action
    ${`should get state after action: ${JSON.stringify(action)}`} | ${action}
  `('$scenario with action: $action', ({ action }) => {
    expect(venuesReducer(initialState, action)).toMatchSnapshot()
  })
})

describe('reducers/venues/payloadGetVenuesExplore', () => {
  const action = getVenuesExploreAsync.success(
    adaptGetVenuesExplore(payloadGetVenuesExplore)
  )

  test.each`
    scenario                                                      | action
    ${`should get state after action: ${JSON.stringify(action)}`} | ${action}
  `('$scenario with action: $action', ({ action }) => {
    expect(venuesReducer(initialState, action)).toMatchSnapshot()
  })
})

describe('reducers/venues/getVenuesTrendingAsync', () => {
  const action = getVenuesTrendingAsync.success(
    adaptGetVenuesTrending(payloadGetVenuesTrending)
  )

  test.each`
    scenario                                                      | action
    ${`should get state after action: ${JSON.stringify(action)}`} | ${action}
  `('$scenario with action: $action', ({ action }) => {
    expect(venuesReducer(initialState, action)).toMatchSnapshot()
  })
})
