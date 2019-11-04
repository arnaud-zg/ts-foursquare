import { NStore } from '../../types'
import { ASYNC_ACTION_NAME_MAPPING } from '../constants/asyncAction'

export const requestEntityIdsSelector = (
  store: NStore.IState,
  actionType: string
) => requestActionSelector(store, actionType) || []

export const requestErrorSelector = (
  store: NStore.IState,
  actionType: string
) =>
  requestActionSelector(store, actionType)
    ? requestActionSelector(store, actionType).error
    : undefined

export const requestCancelReasonSelector = (
  store: NStore.IState,
  actionType: string
) =>
  requestActionSelector(store, actionType)
    ? requestActionSelector(store, actionType).cancelReason
    : undefined

export const requestActionSelector = (
  store: NStore.IState,
  actionType: string
) => requestSelector(store)[ASYNC_ACTION_NAME_MAPPING[actionType]]

export const requestSelector = (store: NStore.IState) => store.request
