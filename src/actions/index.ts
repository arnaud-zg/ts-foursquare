import { getLists } from './lists'
import { getPhotosDetails } from './photos'

export const actions = { getLists, getPhotosDetails }

export type TActions = typeof actions
export type TActionsValue = TActions[keyof TActions]
