import { StateObservable } from 'redux-observable'
import { fromFetch } from 'rxjs/fetch'
import { catchError, switchMap } from 'rxjs/operators'
import { NAction } from '../../types/action.d'
import { NStore } from '../../types/store'
import { EApiDefaultParameters, EApiPathnames } from '../constants/api'
import { generatePath } from '../utils/generatePath'
import { getLocationHref } from '../utils/url'
import {
  getDefaultRequestParameters,
  processFetchError,
  processFetchResponse,
} from './fetch'

export const getObservableVenuesCategories = ({
  state$,
}: {
  state$: StateObservable<NStore.IState>
}) => {
  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_CATEGORIES,
      param: {
        ...getDefaultRequestParameters(state$),
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
  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_EXPLORE,
      param: {
        ...action.payload,
        ...getDefaultRequestParameters(state$),
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
  const { venueId } = action.payload

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: generatePath(EApiPathnames.VENUES_LIKES, { venueId }),
      param: {
        ...getDefaultRequestParameters(state$),
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
  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_SEARCH,
      param: {
        ...action.payload,
        ...getDefaultRequestParameters(state$),
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
  const { venueId } = action.payload

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: generatePath(EApiPathnames.VENUES_SIMILAR, { venueId }),
      param: {
        ...getDefaultRequestParameters(state$),
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
  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_TRENDING,
      param: {
        ...action.payload,
        ...getDefaultRequestParameters(state$),
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
  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_SUGGEST_COMPLETION,
      param: {
        ...action.payload,
        ...getDefaultRequestParameters(state$),
      },
    })
  ).pipe(
    switchMap(processFetchResponse),
    catchError(processFetchError)
  )
}
