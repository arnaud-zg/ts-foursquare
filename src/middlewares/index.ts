import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { NRoot } from '../../types/root.d'
import { TRootAction } from '../actions'
import { getVenuesSearchEpic } from '../epics'

export const rootEpic = combineEpics(getVenuesSearchEpic)
export const epicMiddleware = createEpicMiddleware<
  TRootAction,
  TRootAction,
  NRoot.IState
>()
