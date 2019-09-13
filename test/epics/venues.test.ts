import { Action } from 'typesafe-actions'
import {
  getVenueExploreAsync,
  getVenuesSearchAsync,
} from '../../src/actions/venues'
import {
  adaptGetVenuesExplore,
  adaptGetVenuesSearch,
} from '../../src/adapter/venues'
import { getVenuesSearchEpic } from '../../src/epics/venues'
import { initialState } from '../../src/reducers/app'
import {
  mockingFailingNotFoundFetch,
  mockingFailingNotValidFetch,
  mockingFetch,
  testEpic,
} from '../../src/utils/test'
import { payload as payloadGetVenuesExplore } from './__mocks__/getVenuesExploreAsync.resolve'
import { payload as payloadGetVenuesSearch } from './__mocks__/getVenuesSearchAsync.resolve'
require('isomorphic-fetch')

describe('epics/venues', () => {
  test.each`
    scenario                                                                  | action                                                                                                        | payload                    | expectedActions
    ${'should get search for venues by location'}                             | ${getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' })}                                                   | ${payloadGetVenuesSearch}  | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payloadGetVenuesSearch))]}
    ${'should get search for venues by location with intent match parameter'} | ${getVenuesSearchAsync.request({ intent: 'match', ll: '40.7099,-73.9622' })}                                  | ${payloadGetVenuesSearch}  | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payloadGetVenuesSearch))]}
    ${'should get search for venues by query'}                                | ${getVenuesSearchAsync.request({ query: 'ShopMart' })}                                                        | ${payloadGetVenuesSearch}  | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payloadGetVenuesSearch))]}
    ${'should get search for venues near to a location'}                      | ${getVenuesSearchAsync.request({ near: 'Chicago, IL' })}                                                      | ${payloadGetVenuesSearch}  | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payloadGetVenuesSearch))]}
    ${'should get search for venues'}                                         | ${getVenuesSearchAsync.request({ intent: 'browse', ll: '40.7099,-73.9622', query: 'ShopMart', radius: 500 })} | ${payloadGetVenuesSearch}  | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payloadGetVenuesSearch))]}
    ${'should get recommended places'}                                        | ${getVenueExploreAsync.request({})}                                                                           | ${payloadGetVenuesExplore} | ${[getVenueExploreAsync.success(adaptGetVenuesExplore(payloadGetVenuesExplore))]}
  `('$scenario', ({ action, expectedActions, payload, done }) => {
    mockingFetch({ response: { ...payload } })
    testEpic(
      getVenuesSearchEpic,
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
    scenario                                      | action
    ${'should get search for venues by location'} | ${getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' })}
    ${'should get search for venues by location'} | ${getVenueExploreAsync.request({})}
  `('$scenario', ({ action, done }) => {
    testEpic(
      getVenuesSearchEpic,
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
    scenario                                      | action
    ${'should get search for venues by location'} | ${getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' })}
    ${'should get search for venues by location'} | ${getVenueExploreAsync.request({})}
  `('$scenario', ({ action, done }) => {
    testEpic(
      getVenuesSearchEpic,
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
