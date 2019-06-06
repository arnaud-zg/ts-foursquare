import { getLife } from '../../src/actions/life'

describe('Life', () => {
  it('should return life state', () => {
    expect(getLife({}) instanceof Promise).toBeTruthy()

    getLife({}).then(state => {
      expect(state).toMatchSnapshot()
    })
  })
})
