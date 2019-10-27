import { NLists, NPayload } from '../../types'
import { adaptPayload } from './payload'

export const adaptGetLists = (
  payload: NPayload.IPayload<NLists.IResponse>
): NLists.IList | null => {
  const response = adaptPayload<NLists.IResponse>(payload)

  return response && response.list ? response.list : null
}
