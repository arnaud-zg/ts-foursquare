import { TLifeAction, ELifeAction } from './life'
import { TVenuesAction, EVenuesAction } from './venues'

export type TRootActionType =
  | keyof typeof EVenuesAction
  | keyof typeof ELifeAction

export type TRootAction = TVenuesAction | TLifeAction

export * from './life'
export * from './venues'
