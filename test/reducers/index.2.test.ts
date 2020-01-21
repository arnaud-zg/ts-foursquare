import { configureStore } from '../../src/DEPRECATED_reducers'

describe('reducers', () => {
  it('should take a snapshot of store instance', () => {
    expect(configureStore({ middlewares: [] })).toMatchSnapshot()
  })
})
