import { getLists } from './lists'

export const actions = { getLists }

export type TActions = typeof actions
export type TActionsValue = TActions[keyof TActions]
