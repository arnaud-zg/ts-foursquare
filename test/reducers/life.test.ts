import { getLife, putCredentials } from '../../src/actions/life'
import { lifeReducer, initialState } from '../../src/reducers/life'

describe('reducers/life', () => {
  test.each`
    scenario                                            | action
    ${'should get state after action.getLife()'}        | ${getLife()}
    ${'should get state after action.putCredentials()'} | ${putCredentials({ clientId: '1234', clientSecret: '5678' })}
  `('$scenario with action: $action', ({ action }) => {
    expect(lifeReducer(initialState, action)).toMatchSnapshot()
  })
})
