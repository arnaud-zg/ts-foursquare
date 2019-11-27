import { Action } from 'typesafe-actions'
import { getAccessTokenAsync } from '../../src/actions'
import { adaptGetAccessToken } from '../../src/adapter'
import { getAccessTokenEpic } from '../../src/epics'
import { initialState } from '../../src/reducers/app'
import {
  mockingFailingNotFoundFetch,
  mockingFailingNotValidFetch,
  mockingFetch,
  testEpic,
} from '../../src/utils/test'

require('isomorphic-fetch')

describe('epics/life', () => {
  test.each`
    scenario                     | action                                           | payload             | expectedActions                                                                 | epic
    ${'should get access token'} | ${getAccessTokenAsync.request({ code: '1234' })} | ${{ code: '5678' }} | ${[getAccessTokenAsync.success(adaptGetAccessToken({ access_token: '5678' }))]} | ${getAccessTokenEpic}
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

describe('epics/lists | error case: no network', () => {
  beforeAll(() => {
    mockingFailingNotFoundFetch()
  })

  test.each`
    scenario                     | action                                           | epic
    ${'should get access token'} | ${getAccessTokenAsync.request({ code: '1234' })} | ${getAccessTokenEpic}
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
    scenario                     | action                                           | epic
    ${'should get access token'} | ${getAccessTokenAsync.request({ code: '1234' })} | ${getAccessTokenEpic}
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
