import { createAction, ActionType } from 'typesafe-actions'

export const putCredentials = createAction(
  'PUT_CREDENTIALS',
  action => (payload: NResolve.ICredentialsPayload) => action(payload)
)

export const lifeActions = {
  putCredentials,
}

export type TLifeAction = ActionType<typeof lifeActions>
