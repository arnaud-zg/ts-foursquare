require('isomorphic-fetch')

import { Action } from 'typesafe-actions'
import { getVenuesSearchAsync } from '../../src/actions/venues'
import { adaptGetVenuesSearch } from '../../src/adapter/venues'
import { getVenuesSearchEpic } from '../../src/epics/venues'
import { initialState } from '../../src/reducers/app'
import { mockingFetch, testEpic } from '../../src/utils/test'
import { payload } from './__mocks__/resolveGetVenuesSearch'

describe('epics/venues', () => {
  beforeAll(() => {
    mockingFetch({ response: { ...payload } })
  })

  test.each`
    scenario                                                                  | action                                                                                                        | expectedActions
    ${'should get search for venues by location'}                             | ${getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' })}                                                   | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payload))]}
    ${'should get search for venues by location with intent match parameter'} | ${getVenuesSearchAsync.request({ intent: 'match', ll: '40.7099,-73.9622' })}                                  | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payload))]}
    ${'should get search for venues by query'}                                | ${getVenuesSearchAsync.request({ query: 'ShopMart' })}                                                        | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payload))]}
    ${'should get search for venues near to a location'}                      | ${getVenuesSearchAsync.request({ near: 'Chicago, IL' })}                                                      | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payload))]}
    ${'should get search for venues'}                                         | ${getVenuesSearchAsync.request({ intent: 'browse', ll: '40.7099,-73.9622', query: 'ShopMart', radius: 500 })} | ${[getVenuesSearchAsync.success(adaptGetVenuesSearch(payload))]}
  `('$scenario', ({ action, expectedActions, done }) => {
    testEpic(
      getVenuesSearchEpic,
      expectedActions.length,
      action,
      (actions: Action[]) => {
        expect(actions).toMatchSnapshot()
        actions.map((actualAction, index) => {
          expect(actualAction).toEqual(expectedActions[index])
        })
        done()
      },
      initialState
    )
  })
})
