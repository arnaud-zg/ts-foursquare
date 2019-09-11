import { ELifeAction, TLifeAction } from './life'
import { EVenuesAction, TVenuesAction } from './venues'

export type TRootActionType =
  | keyof typeof EVenuesAction
  | keyof typeof ELifeAction

export type TRootAction = TVenuesAction | TLifeAction

export * from './life'
export * from './venues'
