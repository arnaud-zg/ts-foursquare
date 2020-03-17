import {
  getHttpStatusCategory,
  HTTP_STATUS_SUCCESS,
} from 'http-response-status'
import { NPayload } from '../../types'

export const adaptPayload = <TResponse>(
  payload: NPayload.IPayload<TResponse>
) =>
  !!payload.meta &&
  getHttpStatusCategory(payload.meta.code) === HTTP_STATUS_SUCCESS
    ? payload.response
    : undefined
