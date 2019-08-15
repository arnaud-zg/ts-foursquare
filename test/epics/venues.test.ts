require('isomorphic-fetch')

import { Action } from 'typesafe-actions'
import { EVenuesAction, requestGetVenuesSearch } from '../../src/actions/venues'
import { getVenuesSearchEpic } from '../../src/epics/venues'
import { initialState } from '../../src/reducers'
import { testEpic, mockingFetch } from '../../src/utils/test'
import { payload } from './__mocks__/resolveGetVenuesSearch'

describe('epics/venues', () => {
  beforeAll(() => {
    mockingFetch({
      response: { ...payload },
    })
  })

  test.each`
    scenario                                                                  | action                                                                                                  | expectedActions
    ${'should get search for venues by location'}                             | ${requestGetVenuesSearch({ ll: '40.7099,-73.9622' })}                                                   | ${[{ payload: payload.response.venues, type: EVenuesAction.RESOLVE_GET_VENUES_SEARCH }]}
    ${'should get search for venues by location with intent match parameter'} | ${requestGetVenuesSearch({ ll: '40.7099,-73.9622', intent: 'match' })}                                  | ${[{ payload: payload.response.venues, type: EVenuesAction.RESOLVE_GET_VENUES_SEARCH }]}
    ${'should get search for venues by query'}                                | ${requestGetVenuesSearch({ query: 'ShopMart' })}                                                        | ${[{ payload: payload.response.venues, type: EVenuesAction.RESOLVE_GET_VENUES_SEARCH }]}
    ${'should get search for venues near to a location'}                      | ${requestGetVenuesSearch({ near: 'Chicago, IL' })}                                                      | ${[{ payload: payload.response.venues, type: EVenuesAction.RESOLVE_GET_VENUES_SEARCH }]}
    ${'should get search for venues'}                                         | ${requestGetVenuesSearch({ ll: '40.7099,-73.9622', query: 'ShopMart', intent: 'browse', radius: 500 })} | ${[{ payload: payload.response.venues, type: EVenuesAction.RESOLVE_GET_VENUES_SEARCH }]}
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
