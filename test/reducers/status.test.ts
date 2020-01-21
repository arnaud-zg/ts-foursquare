import { NHttpStatuses } from 'http-response-status'
import { getVenuesSearchAsync } from '../../src/DEPRECATED_actions/venues'
import { adaptGetVenuesSearch } from '../../src/adapter/venues'
import {
  initialState,
  statusReducer,
} from '../../src/DEPRECATED_reducers/status'
import { payload } from '../epics/__mocks__/getVenuesSearchAsync.resolve'
require('isomorphic-fetch')

describe('epics/status', () => {
  test.each`
    initialState    | action
    ${initialState} | ${getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' })}
    ${initialState} | ${getVenuesSearchAsync.failure(new Error(`Error ${NHttpStatuses.EClientError.NOT_FOUND}`))}
    ${initialState} | ${getVenuesSearchAsync.cancel('Action cancelled')}
    ${initialState} | ${getVenuesSearchAsync.success(adaptGetVenuesSearch(payload))}
  `('should set isLoading property', ({ initialState, action }) => {
    expect(statusReducer(initialState, action)).toMatchSnapshot()
  })
})
