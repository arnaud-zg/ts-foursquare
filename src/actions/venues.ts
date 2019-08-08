import { ActionType, action } from 'typesafe-actions'

export enum EVenuesAction {
  REQUEST_GET_VENUES_SEARCH = 'REQUEST_GET_VENUES_SEARCH',
  RESOLVE_GET_VENUES_SEARCH = 'RESOLVE_GET_VENUES_SEARCH',
}

export const requestGetVenuesSearch = (actionPayload: any) =>
  action(EVenuesAction.REQUEST_GET_VENUES_SEARCH, actionPayload)

export const resolveGetVenuesSearch = (actionPayload: any) =>
  action(EVenuesAction.RESOLVE_GET_VENUES_SEARCH, actionPayload)

export const actions = {
  requestGetVenuesSearch,
  resolveGetVenuesSearch,
}

export type TVenuesAction = ActionType<typeof actions>
