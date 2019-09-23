import { TLifeAction } from './life'
import { TVenuesAction } from './venues'

export type TRootActionType = TVenuesAction | TLifeAction

export type TRootAction = TVenuesAction | TLifeAction

export * from './life'
export * from './venues'
