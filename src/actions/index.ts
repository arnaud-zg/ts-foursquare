import { TLifeAction } from './life'
import { EVenuesAction, TVenuesAction } from './venues'

export type TRootActionType = keyof typeof EVenuesAction | TLifeAction

export type TRootAction = TVenuesAction | TLifeAction

export * from './life'
export * from './venues'
