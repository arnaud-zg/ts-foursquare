import { NPayload, NPhotos } from '../../types'
import { ECommonError } from '../constants/error'
import { adaptPayload } from './payload'

export const adaptGetPhotosDetails = (
  payload: NPayload.IPayload<NPhotos.IResponse>
): NPhotos.IPhoto => {
  const response = adaptPayload<NPhotos.IResponse>(payload)

  if (!response || !response.photo) {
    throw new Error(ECommonError.RESPONSE_NOT_VALID)
  }

  return response.photo
}
