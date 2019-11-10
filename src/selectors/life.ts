import { createSelector } from 'selector'
import { NStore } from '../../types'

export const lifeSelector = (state: NStore.IState) =>
  createSelector('life')(state)

export const lifeStatusSelector = (state: NStore.IState) =>
  createSelector('status')(lifeSelector(state))

export const lifeCredentialsSelector = (state: NStore.IState) =>
  createSelector('credentials')(lifeSelector(state))
