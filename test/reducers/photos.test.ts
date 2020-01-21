import { getPhotosDetailsAsync } from '../../src/DEPRECATED_actions'
import { adaptGetPhotosDetails } from '../../src/adapter'
import {
  initialState as initialStatePhotos,
  photosReducer,
} from '../../src/DEPRECATED_reducers/photos'
import {
  initialState as initialStateRequest,
  requestReducer,
} from '../../src/DEPRECATED_reducers/request'
import {
  initialState as initialStateStatus,
  statusReducer,
} from '../../src/DEPRECATED_reducers/status'
import { payload as payloadGetPhotosDetails } from '../epics/__mocks__/getPhotosDetailsAsync.revolve'

const genericFailureError = new Error('An error occurred')
const genericCancelReason = 'An user cancelled this action'

describe('reducers/lists/getPhotosDetailsAsync', () => {
  test.each`
    scenario                                                          | action
    ${`should get state after action: getPhotosDetailsAsync.success`} | ${getPhotosDetailsAsync.success(adaptGetPhotosDetails(payloadGetPhotosDetails))}
    ${`should get state after action: getPhotosDetailsAsync.cancel`}  | ${getPhotosDetailsAsync.cancel(genericCancelReason)}
    ${`should get state after action: getPhotosDetailsAsync.failure`} | ${getPhotosDetailsAsync.failure(genericFailureError)}
  `('$scenario with action: $action', ({ action }) => {
    expect(photosReducer(initialStatePhotos, action)).toMatchSnapshot()
    expect(requestReducer(initialStateRequest, action)).toMatchSnapshot()
    expect(statusReducer(initialStateStatus, action)).toMatchSnapshot()
  })
})
