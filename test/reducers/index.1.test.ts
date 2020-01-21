import { configureStore } from '../../src/DEPRECATED_reducers'
import { Dispatch, AnyAction, MiddlewareAPI } from 'redux'

describe('reducers', () => {
  it('should take a snapshot of store instance', () => {
    const doNothing = (_store: MiddlewareAPI) => (
      next: Dispatch<AnyAction>
    ) => (action: AnyAction) => next(action)

    expect(configureStore({ middlewares: [doNothing] })).toMatchSnapshot()
  })
})
