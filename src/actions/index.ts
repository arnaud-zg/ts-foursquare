import { TLifeActions } from './life'
import { TVenuesAction } from './venues'

export type TAction = TVenuesAction | TLifeActions

export * from './life'
export * from './venues'
