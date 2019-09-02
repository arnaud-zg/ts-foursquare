import { NHttpStatuses } from 'http-response-status'
import { ActionsObservable, StateObservable } from 'redux-observable'
import { Subject } from 'rxjs/internal/Subject'
import { take, toArray } from 'rxjs/operators'
import { Action } from 'typesafe-actions'

export const mockingFetch = ({ response = {} } = {}) => {
  const mockJsonPromise = Promise.resolve(response)
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
    ok: true,
  })

  // @ts-ignore
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)
}

export const mockingFailingNotValidFetch = () => {
  const mockFetchPromise = Promise.resolve({
    ok: true,
    json: null,
  })

  // @ts-ignore
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)
}

export const mockingFailingNotFoundFetch = () => {
  const mockFetchPromise = Promise.resolve({
    ok: false,
    status: NHttpStatuses.ClientError.NOT_FOUND,
  })

  // @ts-ignore
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)
}

export const testEpic = (
  epic: Function,
  count: number,
  action: Action,
  callback: Function,
  initialState = {}
) => {
  const actions = new Subject<Action>()
  const state = new Subject()
  const actions$ = new ActionsObservable(actions)
  const state$ = new StateObservable(state, initialState)

  epic(actions$, state$)
    .pipe(
      take(count),
      toArray()
    )
    .subscribe(callback)

  actions.next(action)
}
