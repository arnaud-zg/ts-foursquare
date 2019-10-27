import { NLists, NPayload } from '../../types'
import { adaptPayload } from './payload'
import { ECommonError } from '../constants/error'

export const adaptGetLists = (
  payload: NPayload.IPayload<NLists.IResponse>
): NLists.IList | null => {
  const response = adaptPayload<NLists.IResponse>(payload)

  if (!response || !response.list) {
    throw new Error(ECommonError.RESPONSE_NOT_VALID)
  }

  return response.list
}
