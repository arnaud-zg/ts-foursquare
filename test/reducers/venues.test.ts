import {
  getVenuesCategoriesAsync,
  getVenuesExploreAsync,
  getVenuesLikesAsync,
  getVenuesListedAsync,
  getVenuesNextVenuesAsync,
  getVenuesSearchAsync,
  getVenuesSimilarAsync,
  getVenuesSuggestCompletionAsync,
  getVenuesTrendingAsync,
} from '../../src/DEPRECATED_actions/venues'
import {
  adaptGetVenuesCategories,
  adaptGetVenuesExplore,
  adaptGetVenuesLikes,
  adaptGetVenuesListed,
  adaptGetVenuesNextVenues,
  adaptGetVenuesSearch,
  adaptGetVenuesSimilar,
  adaptGetVenuesSuggestCompletion,
  adaptGetVenuesTrending,
} from '../../src/adapter/venues'
import {
  initialState as initialStateRequest,
  requestReducer,
} from '../../src/DEPRECATED_reducers/request'
import {
  initialState as initialStateVenues,
  venuesReducer,
} from '../../src/DEPRECATED_reducers/venues'
import { payload as payloadGetVenuesCategories } from '../epics/__mocks__/getVenuesCategoriesAsync.resolve'
import { payload as payloadGetVenuesExplore } from '../epics/__mocks__/getVenuesExploreAsync.resolve'
import { payload as payloadGetVenuesLikes } from '../epics/__mocks__/getVenuesLikesAsync.resolve'
import { payload as payloadGetVenuesListed } from '../epics/__mocks__/getVenuesListedAsync.resolve'
import { payload as payloadGetVenuesNextVenues } from '../epics/__mocks__/getVenuesNextVenues.resolve'
import { payload as payloadGetVenuesSearch } from '../epics/__mocks__/getVenuesSearchAsync.resolve'
import { payload as payloadGetVenuesSimilar } from '../epics/__mocks__/getVenuesSimilarAsync.resolve'
import { payload as payloadGetVenuesSuggestCompletion } from '../epics/__mocks__/getVenuesSuggestCompletionAsync.resolve'
import { payload as payloadGetVenuesTrending } from '../epics/__mocks__/getVenuesTrendingAsync.resolve'

const genericFailureError = new Error('An error occurred')
const genericCancelReason = 'An user cancelled this action'

describe('reducers/venues/getVenuesCategoriesAsync', () => {
  test.each`
    scenario                                                             | action
    ${`should get state after action: getVenuesCategoriesAsync.success`} | ${getVenuesCategoriesAsync.success(adaptGetVenuesCategories(payloadGetVenuesCategories))}
    ${`should get state after action: getVenuesCategoriesAsync.cancel`}  | ${getVenuesCategoriesAsync.cancel(genericCancelReason)}
    ${`should get state after action: getVenuesCategoriesAsync.failure`} | ${getVenuesCategoriesAsync.failure(genericFailureError)}
  `('$scenario with action: $action', ({ action }) => {
    expect(requestReducer(initialStateRequest, action)).toMatchSnapshot()
    expect(venuesReducer(initialStateVenues, action)).toMatchSnapshot()
  })
})

describe('reducers/venues/getVenuesNextVenuesAsync', () => {
  test.each`
    scenario                                                             | action
    ${`should get state after action: getVenuesNextVenuesAsync.success`} | ${getVenuesNextVenuesAsync.success(adaptGetVenuesNextVenues(payloadGetVenuesNextVenues))}
    ${`should get state after action: getVenuesNextVenuesAsync.cancel`}  | ${getVenuesNextVenuesAsync.cancel(genericCancelReason)}
    ${`should get state after action: getVenuesNextVenuesAsync.failure`} | ${getVenuesNextVenuesAsync.failure(genericFailureError)}
  `('$scenario with action: $action', ({ action }) => {
    expect(requestReducer(initialStateRequest, action)).toMatchSnapshot()
    expect(venuesReducer(initialStateVenues, action)).toMatchSnapshot()
  })
})

describe('reducers/venues/getVenuesSearchAsync', () => {
  test.each`
    scenario                                                         | action
    ${`should get state after action: getVenuesSearchAsync.success`} | ${getVenuesSearchAsync.success(adaptGetVenuesSearch(payloadGetVenuesSearch))}
    ${`should get state after action: getVenuesSearchAsync.cancel`}  | ${getVenuesSearchAsync.cancel(genericCancelReason)}
    ${`should get state after action: getVenuesSearchAsync.failure`} | ${getVenuesSearchAsync.failure(genericFailureError)}
  `('$scenario with action: $action', ({ action }) => {
    expect(requestReducer(initialStateRequest, action)).toMatchSnapshot()
    expect(venuesReducer(initialStateVenues, action)).toMatchSnapshot()
  })
})

describe('reducers/venues/getVenuesSimilarAsync', () => {
  test.each`
    scenario                                                          | action
    ${`should get state after action: getVenuesSimilarAsync.success`} | ${getVenuesSimilarAsync.success(adaptGetVenuesSimilar(payloadGetVenuesSimilar))}
    ${`should get state after action: getVenuesSimilarAsync.cancel`}  | ${getVenuesSimilarAsync.cancel(genericCancelReason)}
    ${`should get state after action: getVenuesSimilarAsync.failure`} | ${getVenuesSimilarAsync.failure(genericFailureError)}
  `('$scenario with action: $action', ({ action }) => {
    expect(requestReducer(initialStateRequest, action)).toMatchSnapshot()
    expect(venuesReducer(initialStateVenues, action)).toMatchSnapshot()
  })
})

describe('reducers/venues/payloadGetVenuesExplore', () => {
  test.each`
    scenario                                                            | action
    ${`should get state after action: payloadGetVenuesExplore.success`} | ${getVenuesExploreAsync.success(adaptGetVenuesExplore(payloadGetVenuesExplore))}
    ${`should get state after action: payloadGetVenuesExplore.cancel`}  | ${getVenuesExploreAsync.cancel(genericCancelReason)}
    ${`should get state after action: payloadGetVenuesExplore.failure`} | ${getVenuesExploreAsync.failure(genericFailureError)}
  `('$scenario with action: $action', ({ action }) => {
    expect(requestReducer(initialStateRequest, action)).toMatchSnapshot()
    expect(venuesReducer(initialStateVenues, action)).toMatchSnapshot()
  })
})

describe('reducers/venues/payloadGetVenuesLikes', () => {
  test.each`
    scenario                                                          | action
    ${`should get state after action: payloadGetVenuesLikes.success`} | ${getVenuesLikesAsync.success(adaptGetVenuesLikes(payloadGetVenuesLikes))}
    ${`should get state after action: payloadGetVenuesLikes.cancel`}  | ${getVenuesLikesAsync.cancel(genericCancelReason)}
    ${`should get state after action: payloadGetVenuesLikes.failure`} | ${getVenuesLikesAsync.failure(genericFailureError)}
  `('$scenario with action: $action', ({ action }) => {
    expect(requestReducer(initialStateRequest, action)).toMatchSnapshot()
    expect(venuesReducer(initialStateVenues, action)).toMatchSnapshot()
  })
})

describe('reducers/venues/getVenuesListedAsync', () => {
  test.each`
    scenario                                                         | action
    ${`should get state after action: getVenuesListedAsync.success`} | ${getVenuesListedAsync.success(adaptGetVenuesListed(payloadGetVenuesListed))}
    ${`should get state after action: getVenuesListedAsync.cancel`}  | ${getVenuesListedAsync.cancel(genericCancelReason)}
    ${`should get state after action: getVenuesListedAsync.failure`} | ${getVenuesListedAsync.failure(genericFailureError)}
  `('$scenario with action: $action', ({ action }) => {
    expect(requestReducer(initialStateRequest, action)).toMatchSnapshot()
    expect(venuesReducer(initialStateVenues, action)).toMatchSnapshot()
  })
})

describe('reducers/venues/getVenuesSuggestCompletionAsync', () => {
  test.each`
    scenario                                                                    | action
    ${`should get state after action: getVenuesSuggestCompletionAsync.success`} | ${getVenuesSuggestCompletionAsync.success(adaptGetVenuesSuggestCompletion(payloadGetVenuesSuggestCompletion))}
    ${`should get state after action: getVenuesSuggestCompletionAsync.cancel`}  | ${getVenuesSuggestCompletionAsync.cancel(genericCancelReason)}
    ${`should get state after action: getVenuesSuggestCompletionAsync.failure`} | ${getVenuesSuggestCompletionAsync.failure(genericFailureError)}
  `('$scenario with action: $action', ({ action }) => {
    expect(requestReducer(initialStateRequest, action)).toMatchSnapshot()
    expect(venuesReducer(initialStateVenues, action)).toMatchSnapshot()
  })
})

describe('reducers/venues/getVenuesTrendingAsync', () => {
  test.each`
    scenario                                                           | action
    ${`should get state after action: getVenuesTrendingAsync.success`} | ${getVenuesTrendingAsync.success(adaptGetVenuesTrending(payloadGetVenuesTrending))}
    ${`should get state after action: getVenuesTrendingAsync.cancel`}  | ${getVenuesTrendingAsync.cancel(genericCancelReason)}
    ${`should get state after action: getVenuesTrendingAsync.failure`} | ${getVenuesTrendingAsync.failure(genericFailureError)}
  `('$scenario with action: $action', ({ action }) => {
    expect(requestReducer(initialStateRequest, action)).toMatchSnapshot()
    expect(venuesReducer(initialStateVenues, action)).toMatchSnapshot()
  })
})
