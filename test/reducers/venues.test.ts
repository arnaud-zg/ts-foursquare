import {
  getVenuesCategoriesAsync,
  getVenuesExploreAsync,
  getVenuesSearchAsync,
  getVenuesSimilarAsync,
  getVenuesTrendingAsync,
} from '../../src/actions/venues'
import {
  adaptGetVenuesCategories,
  adaptGetVenuesExplore,
  adaptGetVenuesSearch,
  adaptGetVenuesSimilar,
  adaptGetVenuesTrending,
} from '../../src/adapter/venues'
import { initialState, venuesReducer } from '../../src/reducers/venues'
import { payload as payloadGetVenuesCategories } from '../epics/__mocks__/getVenuesCategoriesAsync.resolve'
import { payload as payloadGetVenuesExplore } from '../epics/__mocks__/getVenuesExploreAsync.resolve'
import { payload as payloadGetVenuesSearch } from '../epics/__mocks__/getVenuesSearchAsync.resolve'
import { payload as payloadGetVenuesSimilar } from '../epics/__mocks__/getVenuesSimilarAsync.resolve'
import { payload as payloadGetVenuesTrending } from '../epics/__mocks__/getVenuesTrendingAsync.resolve'

describe('reducers/venues/getVenuesCategoriesAsync', () => {
  const action = getVenuesCategoriesAsync.success(
    adaptGetVenuesCategories(payloadGetVenuesCategories)
  )

  test.each`
    scenario                                                      | action
    ${`should get state after action: ${JSON.stringify(action)}`} | ${action}
  `('$scenario with action: $action', ({ action }) => {
    expect(venuesReducer(initialState, action)).toMatchSnapshot()
  })
})

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

describe('reducers/venues/getVenuesSimilarAsync', () => {
  const action = getVenuesSimilarAsync.success(
    adaptGetVenuesSimilar(payloadGetVenuesSimilar)
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
