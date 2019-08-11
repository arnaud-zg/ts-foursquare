import { Action } from 'typesafe-actions'
import { ActionsObservable } from 'redux-observable'
import { Subject } from 'rxjs'
import { take, toArray } from 'rxjs/operators'

export const mockingFetch = ({ response = {} } = {}) => {
  const mockJsonPromise = Promise.resolve(response)
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
    ok: true,
  })

  // @ts-ignore
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)
}

export const testEpic = (
  epic: Function,
  count: number,
  action: Action,
  callback: Function,
  state = {}
) => {
  const actions = new Subject()
  const actions$ = new ActionsObservable(actions)
  const store = { getState: () => state }

  epic(actions$, store)
    .pipe(
      take(count),
      toArray()
    )
    .subscribe(callback)

  actions.next(action)
}
