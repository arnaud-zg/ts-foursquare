import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { NStore } from '../../types/store'
import { TRootAction } from '../actions'
import { getVenuesExploreEpic, getVenuesSearchEpic } from '../epics'

export const rootEpic = combineEpics(getVenuesSearchEpic, getVenuesExploreEpic)
export const epicMiddleware = createEpicMiddleware<
  TRootAction,
  TRootAction,
  NStore.IState
>()
