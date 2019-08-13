require('isomorphic-fetch')

import { Action } from 'typesafe-actions'
import { EVenuesAction, requestGetVenuesSearch } from '../../src/actions/venues'
import { getVenuesSearchEpic } from '../../src/epics/venues'
import { testEpic, mockingFetch } from '../../src/utils/test'
import { payload } from './__mocks__/resolveGetVenuesSearch'

describe('epics/venues', () => {
  beforeAll(() => {
    mockingFetch({
      response: { ...payload },
    })
  })

  it('call venues api endpoint', done => {
    const action = requestGetVenuesSearch({ query: 'peter luger steakhouse' })
    const expectedActions = [
      {
        payload: payload.response.venues,
        type: EVenuesAction.RESOLVE_GET_VENUES_SEARCH,
      },
    ]

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
      }
    )
  })
})
