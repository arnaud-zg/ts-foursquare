import { getType } from 'typesafe-actions'
import { getVenuesSearchAsync } from '../../src/DEPRECATED_actions/venues'
import { ASYNC_ACTION_NAME_MAPPING } from '../../src/constants/asyncAction'
import { initialState } from '../../src/DEPRECATED_reducers/app'
import {
  requestActionSelector,
  requestCancelReasonSelector,
  requestEntityIdsSelector,
  requestErrorSelector,
  requestSelector,
} from '../../src/DEPRECATED_selectors/request'
import { NStore } from '../../types'
import { payload as payloadGetVenuesSearch } from '../epics/__mocks__/getVenuesSearchAsync.resolve'

const entityIds = payloadGetVenuesSearch.response.venues.map(item => item.id)

const state: NStore.IState = {
  ...initialState,
  request: {
    [ASYNC_ACTION_NAME_MAPPING[getType(getVenuesSearchAsync.success)]]: {
      entityIds,
    },
  },
}

describe('selectors/venues', () => {
  it('should get request state', () => {
    expect(requestSelector(state)).toMatchSnapshot()
  })

  it('should get request action', () => {
    expect(
      requestActionSelector(state, getType(getVenuesSearchAsync.success))
    ).toMatchSnapshot()
  })

  it("should get request action's entityIds", () => {
    expect(
      requestEntityIdsSelector(
        { ...initialState },
        getType(getVenuesSearchAsync.success)
      )
    ).toMatchSnapshot()
    expect(
      requestEntityIdsSelector(state, getType(getVenuesSearchAsync.success))
    ).toMatchSnapshot()
  })

  it("should get request action's error", () => {
    expect(
      requestErrorSelector(
        { ...initialState },
        getType(getVenuesSearchAsync.failure)
      )
    ).toMatchSnapshot()
    expect(
      requestErrorSelector(
        {
          ...state,
          request: {
            [ASYNC_ACTION_NAME_MAPPING[
              getType(getVenuesSearchAsync.success)
            ]]: {
              entityIds,
              error: new Error('An error occurred'),
            },
          },
        },
        getType(getVenuesSearchAsync.failure)
      )
    ).toMatchSnapshot()
  })

  it("should get request action's cancel reason", () => {
    expect(
      requestCancelReasonSelector(
        { ...initialState },
        getType(getVenuesSearchAsync.cancel)
      )
    ).toMatchSnapshot()
    expect(
      requestCancelReasonSelector(
        {
          ...state,
          request: {
            [ASYNC_ACTION_NAME_MAPPING[
              getType(getVenuesSearchAsync.success)
            ]]: {
              entityIds,
              cancelReason: 'An user cancelled this action',
            },
          },
        },
        getType(getVenuesSearchAsync.cancel)
      )
    ).toMatchSnapshot()
  })
})
