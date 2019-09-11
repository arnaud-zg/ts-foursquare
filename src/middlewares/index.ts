import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { getVenuesSearchEpic } from '../epics'
import { TRootAction } from '../actions'
import { NStore } from '../../types/store'

export const rootEpic = combineEpics(getVenuesSearchEpic)
export const epicMiddleware = createEpicMiddleware<
  TRootAction,
  TRootAction,
  NStore.IState
>()
