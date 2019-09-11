import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { NStore } from '../../types/store'
import { TRootAction } from '../actions'
import { getVenuesSearchEpic } from '../epics'

export const rootEpic = combineEpics(getVenuesSearchEpic)
export const epicMiddleware = createEpicMiddleware<
  TRootAction,
  TRootAction,
  NStore.IState
>()
