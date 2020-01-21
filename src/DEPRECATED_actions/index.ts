import { TLifeAction } from './life'
import { TListsAction } from './lists'
import { TPhotosAction } from './photos'
import { TVenuesAction } from './venues'

export type TRootAction =
  | TLifeAction
  | TListsAction
  | TPhotosAction
  | TVenuesAction

export * from './life'
export * from './lists'
export * from './photos'
export * from './venues'
