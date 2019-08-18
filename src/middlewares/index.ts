import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { getVenuesSearchEpic } from '../epics'
import { TAction } from '../actions'
import { NRoot } from '../../types/root.d'

export const rootEpic = combineEpics(getVenuesSearchEpic)
export const epicMiddleware = createEpicMiddleware<
  TAction,
  TAction,
  NRoot.IState
>()
