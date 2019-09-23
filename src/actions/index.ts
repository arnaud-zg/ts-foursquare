import { ELifeAction, TLifeAction } from './life'
import { TVenuesAction } from './venues'

export type TRootActionType = TVenuesAction | keyof typeof ELifeAction

export type TRootAction = TVenuesAction | TLifeAction

export * from './life'
export * from './venues'
