import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { NStore } from '../../types'
import { TRootAction } from '../DEPRECATED_actions'
import { getAccessTokenEpic } from '../DEPRECATED_epics'

export const rootEpic = combineEpics(getAccessTokenEpic)
export const epicMiddleware = createEpicMiddleware<
  TRootAction,
  TRootAction,
  NStore.IState
>()
