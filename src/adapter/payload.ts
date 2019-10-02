import { NHttpStatuses } from 'http-response-status'
import { NPayload } from '../../types/payload'

export const adaptPayload = <TResponse>(
  payload: NPayload.IPayload<TResponse>
) =>
  !!payload.meta &&
  payload.meta.code === NHttpStatuses.ESuccess.OK &&
  payload.response