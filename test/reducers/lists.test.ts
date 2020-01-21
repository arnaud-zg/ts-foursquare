import { getListsAsync } from '../../src/DEPRECATED_actions'
import { adaptGetLists } from '../../src/adapter'
import {
  initialState as initialStateLists,
  listsReducer,
} from '../../src/DEPRECATED_reducers/lists'
import {
  initialState as initialStateRequest,
  requestReducer,
} from '../../src/DEPRECATED_reducers/request'
import {
  initialState as initialStateStatus,
  statusReducer,
} from '../../src/DEPRECATED_reducers/status'
import { payload as payloadGetLists } from '../epics/__mocks__/getListsAsync.resolve'

const genericFailureError = new Error('An error occurred')
const genericCancelReason = 'An user cancelled this action'

describe('reducers/lists/getListsAsync', () => {
  test.each`
    scenario                                                  | action
    ${`should get state after action: getListsAsync.success`} | ${getListsAsync.success(adaptGetLists(payloadGetLists))}
    ${`should get state after action: getListsAsync.cancel`}  | ${getListsAsync.cancel(genericCancelReason)}
    ${`should get state after action: getListsAsync.failure`} | ${getListsAsync.failure(genericFailureError)}
  `('$scenario with action: $action', ({ action }) => {
    expect(listsReducer(initialStateLists, action)).toMatchSnapshot()
    expect(requestReducer(initialStateRequest, action)).toMatchSnapshot()
    expect(statusReducer(initialStateStatus, action)).toMatchSnapshot()
  })
})
