import { Action } from 'typesafe-actions'
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
import {
  getVenuesExploreEpic,
  getVenuesSearchEpic,
  getVenuesTrendingEpic,
} from '../../src/epics/venues'
import { initialState } from '../../src/reducers/app'
import {
  mockingFailingNotFoundFetch,
  mockingFailingNotValidFetch,
  mockingFetch,
  testEpic,
} from '../../src/utils/test'
import { payload as payloadGetVenuesExplore } from './__mocks__/getVenuesExploreAsync.resolve'
import { payload as payloadGetVenuesSearch } from './__mocks__/getVenuesSearchAsync.resolve'
import { payload as payloadGetVenuesTrending } from './__mocks__/getVenuesTrendingAsync.resolve'
require('isomorphic-fetch')

describe('epics/venues', () => {
  test.each`
    scenario                                                             | action                                                                                                                                                                      | payload                     | expectedActions                                                                       | epic
    ${'should get venues by location'}                                   | ${getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' })}                                                                                                                 | ${payloadGetVenuesSearch}   | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payloadGetVenuesSearch))]}       | ${getVenuesSearchEpic}
    ${'should get venues by location with intent match parameter'}       | ${getVenuesSearchAsync.request({ intent: 'match', ll: '40.7099,-73.9622' })}                                                                                                | ${payloadGetVenuesSearch}   | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payloadGetVenuesSearch))]}       | ${getVenuesSearchEpic}
    ${'should get venues by query'}                                      | ${getVenuesSearchAsync.request({ query: 'ShopMart' })}                                                                                                                      | ${payloadGetVenuesSearch}   | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payloadGetVenuesSearch))]}       | ${getVenuesSearchEpic}
    ${'should get venues near to a location'}                            | ${getVenuesSearchAsync.request({ near: 'Chicago, IL' })}                                                                                                                    | ${payloadGetVenuesSearch}   | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payloadGetVenuesSearch))]}       | ${getVenuesSearchEpic}
    ${'should get venues'}                                               | ${getVenuesSearchAsync.request({ intent: 'browse', ll: '40.7099,-73.9622', query: 'ShopMart', radius: 500 })}                                                               | ${payloadGetVenuesSearch}   | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payloadGetVenuesSearch))]}       | ${getVenuesSearchEpic}
    ${'should get recommended places by location'}                       | ${getVenuesExploreAsync.request({ ll: '40.7099,-73.9622' })}                                                                                                                | ${payloadGetVenuesExplore}  | ${[getVenuesExploreAsync.success(adaptGetVenuesExplore(payloadGetVenuesExplore))]}    | ${getVenuesExploreEpic}
    ${'should get recommended places near to a location'}                | ${getVenuesExploreAsync.request({ near: 'Chicago, IL' })}                                                                                                                   | ${payloadGetVenuesExplore}  | ${[getVenuesExploreAsync.success(adaptGetVenuesExplore(payloadGetVenuesExplore))]}    | ${getVenuesExploreEpic}
    ${'should get recommended places by location with custom parameter'} | ${getVenuesExploreAsync.request({ friendVisits: 'visited', ll: '40.7099,-73.9622', openNow: 1, price: '0,20', section: 'drinks', sortByDistance: 1, query: 'Bubble Tea' })} | ${payloadGetVenuesExplore}  | ${[getVenuesExploreAsync.success(adaptGetVenuesExplore(payloadGetVenuesExplore))]}    | ${getVenuesExploreEpic}
    ${'should get trending venues by location'}                          | ${getVenuesTrendingAsync.request({ ll: '40.7099,-73.9622' })}                                                                                                               | ${payloadGetVenuesTrending} | ${[getVenuesTrendingAsync.success(adaptGetVenuesTrending(payloadGetVenuesTrending))]} | ${getVenuesTrendingEpic}
    ${'should get trending venues near to a location'}                   | ${getVenuesTrendingAsync.request({ near: 'Chicago, IL' })}                                                                                                                  | ${payloadGetVenuesTrending} | ${[getVenuesTrendingAsync.success(adaptGetVenuesTrending(payloadGetVenuesTrending))]} | ${getVenuesTrendingEpic}
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
    scenario                                       | action                                                        | epic
    ${'should get venues by location'}             | ${getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' })}   | ${getVenuesSearchEpic}
    ${'should get recommended places by location'} | ${getVenuesExploreAsync.request({ ll: '40.7099,-73.9622' })}  | ${getVenuesExploreEpic}
    ${'should get trending venues by location'}    | ${getVenuesTrendingAsync.request({ ll: '40.7099,-73.9622' })} | ${getVenuesTrendingEpic}
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
    scenario                                       | action                                                        | epic
    ${'should get venues by location'}             | ${getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' })}   | ${getVenuesSearchEpic}
    ${'should get recommended places by location'} | ${getVenuesExploreAsync.request({ ll: '40.7099,-73.9622' })}  | ${getVenuesExploreEpic}
    ${'should get trending venues by location'}    | ${getVenuesTrendingAsync.request({ ll: '40.7099,-73.9622' })} | ${getVenuesTrendingEpic}
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
