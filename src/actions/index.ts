import { TLifeAction, lifeActions } from './life'
import { TVenuesAction, venuesActions } from './venues'

export type TRootActionType =
  | keyof typeof venuesActions
  | keyof typeof lifeActions

export type TRootAction = TVenuesAction | TLifeAction

export * from './life'
export * from './venues'
