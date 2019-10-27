import { ActionType, createAsyncAction } from 'typesafe-actions'
import { NRequest } from '../../types'
import { adaptGetLists } from '../adapter'

export const getListsAsync = createAsyncAction(
  'GET_LISTS_REQUEST',
  'GET_LISTS_SUCCESS',
  'GET_LISTS_FAILURE',
  'GET_LISTS_CANCEL'
)<NRequest.IListsPayload, ReturnType<typeof adaptGetLists>, Error, string>()

export const listsActions = {
  getListsAsync,
}

export type TListsAction = ActionType<typeof listsActions>
