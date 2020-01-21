import { ActionType, createAsyncAction } from 'typesafe-actions'
import { NRequest } from '../../types'
import { adaptGetPhotosDetails } from '../adapter'

export const getPhotosDetailsAsync = createAsyncAction(
  'GET_PHOTOS_DETAILS_REQUEST',
  'GET_PHOTOS_DETAILS_SUCCESS',
  'GET_PHOTOS_DETAILS_FAILURE',
  'GET_PHOTOS_DETAILS_CANCEL'
)<
  NRequest.IPhotosDetailsPayload,
  ReturnType<typeof adaptGetPhotosDetails>,
  Error,
  string
>()

export const photosActions = {
  getPhotosDetailsAsync,
}

export type TPhotosAction = ActionType<typeof photosActions>
