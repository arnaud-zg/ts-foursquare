import { Action } from 'typesafe-actions'
import { getPhotosDetailsAsync } from '../../src/actions'
import { adaptGetPhotosDetails } from '../../src/adapter'
import { getPhotosDetailsEpic } from '../../src/epics'
import { initialState } from '../../src/reducers/app'
import {
  mockingFailingNotFoundFetch,
  mockingFailingNotValidFetch,
  mockingFetch,
  testEpic,
} from '../../src/utils/test'
import { payload as payloadGetPhotosDetails } from './__mocks__/getPhotosDetailsAsync.revolve'

require('isomorphic-fetch')

describe('epics/lists', () => {
  test.each`
    scenario                                | action                                                                    | payload                    | expectedActions                                                                    | epic
    ${'should gives details about a photo'} | ${getPhotosDetailsAsync.request({ photoId: '51e4151c498e60b5d17bc721' })} | ${payloadGetPhotosDetails} | ${[getPhotosDetailsAsync.success(adaptGetPhotosDetails(payloadGetPhotosDetails))]} | ${getPhotosDetailsEpic}
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
    scenario                                | action                                                                    | epic
    ${'should gives details about a photo'} | ${getPhotosDetailsAsync.request({ photoId: '51e4151c498e60b5d17bc721' })} | ${getPhotosDetailsEpic}
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
    scenario                                | action                                                                    | epic
    ${'should gives details about a photo'} | ${getPhotosDetailsAsync.request({ photoId: '51e4151c498e60b5d17bc721' })} | ${getPhotosDetailsEpic}
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
