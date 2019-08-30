import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { getVenuesSearchEpic } from '../epics'
import { TRootAction } from '../actions'
import { NRoot } from '../../types/root.d'

export const rootEpic = combineEpics(getVenuesSearchEpic)
export const epicMiddleware = createEpicMiddleware<
  TRootAction,
  TRootAction,
  NRoot.IState
>()
