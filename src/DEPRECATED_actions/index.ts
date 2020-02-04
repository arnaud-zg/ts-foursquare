import { TLifeAction } from './life'
import { TPhotosAction } from './photos'
import { TVenuesAction } from './venues'

export type TRootAction = TLifeAction | TPhotosAction | TVenuesAction

export * from './life'
export * from './photos'
export * from './venues'
