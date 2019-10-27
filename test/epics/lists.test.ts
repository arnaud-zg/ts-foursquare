import { Action } from 'typesafe-actions'
import { getListsAsync } from '../../src/actions'
import { adaptGetLists } from '../../src/adapter'
import { getListsEpic } from '../../src/epics'
import { initialState } from '../../src/reducers/app'
import {
  mockingFailingNotFoundFetch,
  mockingFailingNotValidFetch,
  mockingFetch,
  testEpic,
} from '../../src/utils/test'
import { payload as payloadGetLists } from './__mocks__/getListsAsync.resolve'

require('isomorphic-fetch')

describe('epics/lists', () => {
  test.each`
    scenario                               | action                                                           | payload            | expectedActions                                            | epic
    ${'should gives details about a list'} | ${getListsAsync.request({ listId: '5580721e498e7c48540bf83f' })} | ${payloadGetLists} | ${[getListsAsync.success(adaptGetLists(payloadGetLists))]} | ${getListsEpic}
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
    scenario                               | action                                                           | epic
    ${'should gives details about a list'} | ${getListsAsync.request({ listId: '5580721e498e7c48540bf83f' })} | ${getListsEpic}
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
    scenario                               | action                                                           | epic
    ${'should gives details about a list'} | ${getListsAsync.request({ listId: '5580721e498e7c48540bf83f' })} | ${getListsEpic}
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
