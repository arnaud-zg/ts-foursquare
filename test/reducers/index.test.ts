import { configureStore } from '../../src/reducers'

describe('reducers', () => {
  it('should take a snapshot of store instance', () => {
    expect(configureStore()).toMatchSnapshot()
  })
})
