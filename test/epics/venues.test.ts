import { Action } from 'typesafe-actions'
import {
  getVenuesCategoriesAsync,
  getVenuesExploreAsync,
  getVenuesLikesAsync,
  getVenuesSearchAsync,
  getVenuesSuggestCompletionAsync,
  getVenuesTrendingAsync,
} from '../../src/actions/venues'
import {
  adapterGetVenuesLikes,
  adaptGetVenuesCategories,
  adaptGetVenuesExplore,
  adaptGetVenuesSearch,
  adaptGetVenuesSuggestCompletion,
  adaptGetVenuesTrending,
} from '../../src/adapter/venues'
import {
  getVenuesCategoriesEpic,
  getVenuesExploreEpic,
  getVenuesLikesEpic,
  getVenuesSearchEpic,
  getVenuesSuggestCompletionEpic,
  getVenuesTrendingEpic,
} from '../../src/epics/venues'
import { initialState } from '../../src/reducers/app'
import {
  mockingFailingNotFoundFetch,
  mockingFailingNotValidFetch,
  mockingFetch,
  testEpic,
} from '../../src/utils/test'
import { payload as payloadGetVenuesCategories } from './__mocks__/getVenuesCategoriesAsync.resolve'
import { payload as payloadGetVenuesExplore } from './__mocks__/getVenuesExploreAsync.resolve'
import { payload as payloadGetVenuesLikes } from './__mocks__/getVenuesLikesAsync.resolve'
import { payload as payloadGetVenuesSearch } from './__mocks__/getVenuesSearchAsync.resolve'
import { payload as payloadGetVenuesSuggestCompletion } from './__mocks__/getVenuesSuggestCompletionAsync.resolve'
import { payload as payloadGetVenuesTrending } from './__mocks__/getVenuesTrendingAsync.resolve'

require('isomorphic-fetch')

describe('epics/venues', () => {
  test.each`
    scenario                                                             | action                                                                                                                                                                      | payload                              | expectedActions                                                                                                  | epic
    ${'should get venues by location'}                                   | ${getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' })}                                                                                                                 | ${payloadGetVenuesSearch}            | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payloadGetVenuesSearch))]}                                  | ${getVenuesSearchEpic}
    ${'should get venues by location with intent match parameter'}       | ${getVenuesSearchAsync.request({ intent: 'match', ll: '40.7099,-73.9622' })}                                                                                                | ${payloadGetVenuesSearch}            | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payloadGetVenuesSearch))]}                                  | ${getVenuesSearchEpic}
    ${'should get venues by query'}                                      | ${getVenuesSearchAsync.request({ query: 'ShopMart' })}                                                                                                                      | ${payloadGetVenuesSearch}            | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payloadGetVenuesSearch))]}                                  | ${getVenuesSearchEpic}
    ${'should get venues near to a location'}                            | ${getVenuesSearchAsync.request({ near: 'Chicago, IL' })}                                                                                                                    | ${payloadGetVenuesSearch}            | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payloadGetVenuesSearch))]}                                  | ${getVenuesSearchEpic}
    ${'should get venues'}                                               | ${getVenuesSearchAsync.request({ intent: 'browse', ll: '40.7099,-73.9622', query: 'ShopMart', radius: 500 })}                                                               | ${payloadGetVenuesSearch}            | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payloadGetVenuesSearch))]}                                  | ${getVenuesSearchEpic}
    ${'should get recommended places by location'}                       | ${getVenuesExploreAsync.request({ ll: '40.7099,-73.9622' })}                                                                                                                | ${payloadGetVenuesExplore}           | ${[getVenuesExploreAsync.success(adaptGetVenuesExplore(payloadGetVenuesExplore))]}                               | ${getVenuesExploreEpic}
    ${'should get recommended places near to a location'}                | ${getVenuesExploreAsync.request({ near: 'Chicago, IL' })}                                                                                                                   | ${payloadGetVenuesExplore}           | ${[getVenuesExploreAsync.success(adaptGetVenuesExplore(payloadGetVenuesExplore))]}                               | ${getVenuesExploreEpic}
    ${'should get recommended places by location with custom parameter'} | ${getVenuesExploreAsync.request({ friendVisits: 'visited', ll: '40.7099,-73.9622', openNow: 1, price: '0,20', section: 'drinks', sortByDistance: 1, query: 'Bubble Tea' })} | ${payloadGetVenuesExplore}           | ${[getVenuesExploreAsync.success(adaptGetVenuesExplore(payloadGetVenuesExplore))]}                               | ${getVenuesExploreEpic}
    ${'should get trending venues by location'}                          | ${getVenuesTrendingAsync.request({ ll: '40.7099,-73.9622' })}                                                                                                               | ${payloadGetVenuesTrending}          | ${[getVenuesTrendingAsync.success(adaptGetVenuesTrending(payloadGetVenuesTrending))]}                            | ${getVenuesTrendingEpic}
    ${'should get trending venues near to a location'}                   | ${getVenuesTrendingAsync.request({ near: 'Chicago, IL' })}                                                                                                                  | ${payloadGetVenuesTrending}          | ${[getVenuesTrendingAsync.success(adaptGetVenuesTrending(payloadGetVenuesTrending))]}                            | ${getVenuesTrendingEpic}
    ${'should suggest completion for venues by location'}                | ${getVenuesSuggestCompletionAsync.request({ ll: '40.7099,-73.9622', query: 'Burger' })}                                                                                     | ${payloadGetVenuesSuggestCompletion} | ${[getVenuesSuggestCompletionAsync.success(adaptGetVenuesSuggestCompletion(payloadGetVenuesSuggestCompletion))]} | ${getVenuesSuggestCompletionEpic}
    ${'should suggest completion for venues near to a location'}         | ${getVenuesSuggestCompletionAsync.request({ near: 'Chicago, IL', query: 'Burger' })}                                                                                        | ${payloadGetVenuesSuggestCompletion} | ${[getVenuesSuggestCompletionAsync.success(adaptGetVenuesSuggestCompletion(payloadGetVenuesSuggestCompletion))]} | ${getVenuesSuggestCompletionEpic}
    ${'should get venues likes'}                                         | ${getVenuesLikesAsync.request({ venueId: '49b6e8d2f964a52016531fe3' })}                                                                                                     | ${payloadGetVenuesLikes}             | ${[getVenuesLikesAsync.success(adapterGetVenuesLikes(payloadGetVenuesLikes))]}                                   | ${getVenuesLikesEpic}
    ${'should get venues categories'}                                    | ${getVenuesCategoriesAsync.request({})}                                                                                                                                     | ${payloadGetVenuesCategories}        | ${[getVenuesCategoriesAsync.success(adaptGetVenuesCategories(payloadGetVenuesCategories))]}                      | ${getVenuesCategoriesEpic}
  `('$scenario', ({ action, expectedActions, epic, payload, done }) => {
    mockingFetch({ response: { ...payload } })
    testEpic(
      epic,
      expectedActions.length,
      action,
      (actions: Action[]) => {
        expect(actions).toMatchSnapshot()
        actions.forEach((actualAction, index) => {
          expect(actualAction).toEqual(expectedActions[index])
        })
        done()
      },
      initialState
    )
  })
})

describe('epics/venues | error case: no network', () => {
  beforeAll(() => {
    mockingFailingNotFoundFetch()
  })

  test.each`
    scenario                                                     | action                                                                                  | epic
    ${'should get venues by location'}                           | ${getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' })}                             | ${getVenuesSearchEpic}
    ${'should get recommended places by location'}               | ${getVenuesExploreAsync.request({ ll: '40.7099,-73.9622' })}                            | ${getVenuesExploreEpic}
    ${'should get trending venues by location'}                  | ${getVenuesTrendingAsync.request({ ll: '40.7099,-73.9622' })}                           | ${getVenuesTrendingEpic}
    ${'should suggest completion for venues by location'}        | ${getVenuesSuggestCompletionAsync.request({ ll: '40.7099,-73.9622', query: 'Burger' })} | ${getVenuesTrendingEpic}
    ${'should suggest completion for venues near to a location'} | ${getVenuesSuggestCompletionAsync.request({ near: 'Chicago, IL', query: 'Burger' })}    | ${getVenuesTrendingEpic}
    ${'should get venues likes'}                                 | ${getVenuesLikesAsync.request({ venueId: '49b6e8d2f964a52016531fe3' })}                 | ${getVenuesLikesEpic}
    ${'should get venues categories'}                            | ${getVenuesCategoriesAsync.request({})}                                                 | ${getVenuesCategoriesEpic}
  `('$scenario', ({ action, epic, done }) => {
    testEpic(
      epic,
      1,
      action,
      (actions: Action[]) => {
        expect(actions).toMatchSnapshot()
        done()
      },
      initialState
    )
  })
})

describe('epics/venues | error case: not valid response', () => {
  beforeAll(() => {
    mockingFailingNotValidFetch()
  })

  test.each`
    scenario                                                     | action                                                                                  | epic
    ${'should get venues by location'}                           | ${getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' })}                             | ${getVenuesSearchEpic}
    ${'should get recommended places by location'}               | ${getVenuesExploreAsync.request({ ll: '40.7099,-73.9622' })}                            | ${getVenuesExploreEpic}
    ${'should get trending venues by location'}                  | ${getVenuesTrendingAsync.request({ ll: '40.7099,-73.9622' })}                           | ${getVenuesTrendingEpic}
    ${'should suggest completion for venues by location'}        | ${getVenuesSuggestCompletionAsync.request({ ll: '40.7099,-73.9622', query: 'Burger' })} | ${getVenuesSuggestCompletionEpic}
    ${'should suggest completion for venues near to a location'} | ${getVenuesSuggestCompletionAsync.request({ near: 'Chicago, IL', query: 'Burger' })}    | ${getVenuesSuggestCompletionEpic}
    ${'should get venues likes'}                                 | ${getVenuesLikesAsync.request({ venueId: '49b6e8d2f964a52016531fe3' })}                 | ${getVenuesLikesEpic}
    ${'should get venues categories'}                            | ${getVenuesCategoriesAsync.request({})}                                                 | ${getVenuesCategoriesEpic}
  `('$scenario', ({ action, epic, done }) => {
    testEpic(
      epic,
      1,
      action,
      (actions: Action[]) => {
        expect(actions).toMatchSnapshot()
        done()
      },
      initialState
    )
  })
})
