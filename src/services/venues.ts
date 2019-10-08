import { StateObservable } from 'redux-observable'
import { fromFetch } from 'rxjs/fetch'
import { catchError, switchMap } from 'rxjs/operators'
import { NAction } from '../../types/action.d'
import { NStore } from '../../types/store'
import { EApiDefaultParameters, EApiPathnames } from '../constants/api'
import { credentialsSelector } from '../selectors/life'
import { generatePath } from '../utils/generatePath'
import { getLocationHref } from '../utils/url'
import { processFetchError, processFetchResponse } from './fetch'

export const getObservableVenuesCategories = ({
  state$,
}: {
  state$: StateObservable<NStore.IState>
}) => {
  const { clientId, clientSecret } = credentialsSelector(state$.value)

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_CATEGORIES,
      param: {
        client_id: clientId,
        client_secret: clientSecret,
        v: EApiDefaultParameters.VERSION,
      },
    })
  ).pipe(
    switchMap(processFetchResponse),
    catchError(processFetchError)
  )
}

export const getObservableVenuesExplore = ({
  action,
  state$,
}: {
  action: NAction.IAction
  state$: StateObservable<NStore.IState>
}) => {
  const { clientId, clientSecret } = credentialsSelector(state$.value)

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_EXPLORE,
      param: {
        ...action.payload,
        client_id: clientId,
        client_secret: clientSecret,
        v: EApiDefaultParameters.VERSION,
      },
    })
  ).pipe(
    switchMap(processFetchResponse),
    catchError(processFetchError)
  )
}

export const getObservableVenuesLikes = ({
  action,
  state$,
}: {
  action: NAction.IAction
  state$: StateObservable<NStore.IState>
}) => {
  const { clientId, clientSecret } = credentialsSelector(state$.value)
  const { venueId } = action.payload

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: generatePath(EApiPathnames.VENUES_LIKES, { venueId }),
      param: {
        client_id: clientId,
        client_secret: clientSecret,
        v: EApiDefaultParameters.VERSION,
      },
    })
  ).pipe(
    switchMap(processFetchResponse),
    catchError(processFetchError)
  )
}

export const getObservableVenuesSearch = ({
  action,
  state$,
}: {
  action: NAction.IAction
  state$: StateObservable<NStore.IState>
}) => {
  const { clientId, clientSecret } = credentialsSelector(state$.value)

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_SEARCH,
      param: {
        ...action.payload,
        client_id: clientId,
        client_secret: clientSecret,
        v: EApiDefaultParameters.VERSION,
      },
    })
  ).pipe(
    switchMap(processFetchResponse),
    catchError(processFetchError)
  )
}

export const getObservableVenuesSimilar = ({
  action,
  state$,
}: {
  action: NAction.IAction
  state$: StateObservable<NStore.IState>
}) => {
  const { clientId, clientSecret } = credentialsSelector(state$.value)
  const { venueId } = action.payload

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: generatePath(EApiPathnames.VENUES_SIMILAR, { venueId }),
      param: {
        client_id: clientId,
        client_secret: clientSecret,
        v: EApiDefaultParameters.VERSION,
      },
    })
  ).pipe(
    switchMap(processFetchResponse),
    catchError(processFetchError)
  )
}

export const getObservableVenuesTrending = ({
  action,
  state$,
}: {
  action: NAction.IAction
  state$: StateObservable<NStore.IState>
}) => {
  const { clientId, clientSecret } = credentialsSelector(state$.value)

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_TRENDING,
      param: {
        ...action.payload,
        client_id: clientId,
        client_secret: clientSecret,
        v: EApiDefaultParameters.VERSION,
      },
    })
  ).pipe(
    switchMap(processFetchResponse),
    catchError(processFetchError)
  )
}

export const getObservableVenuesSuggestCompletion = ({
  action,
  state$,
}: {
  action: NAction.IAction
  state$: StateObservable<NStore.IState>
}) => {
  const { clientId, clientSecret } = credentialsSelector(state$.value)

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_SUGGEST_COMPLETION,
      param: {
        ...action.payload,
        client_id: clientId,
        client_secret: clientSecret,
        v: EApiDefaultParameters.VERSION,
      },
    })
  ).pipe(
    switchMap(processFetchResponse),
    catchError(processFetchError)
  )
}
