import { TLifeAction } from './life'
import { TVenuesAction } from './venues'

export type TRootAction = TLifeAction | TVenuesAction

export * from './life'
export * from './venues'
