import { fromFetch } from 'rxjs/fetch'
import { catchError, switchMap } from 'rxjs/operators'
import { NAction } from '../../types'
import { EApiDefaultParameters, EApiPathnames } from '../constants/api'
import { generatePath } from '../utils/generatePath'
import { getLocationHref } from '../utils/url'
import { processFetchError, processFetchResponse } from './fetch'

export const getObservableVenuesCategories = () => {
  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_CATEGORIES,
      param: {},
    })
  ).pipe(switchMap(processFetchResponse), catchError(processFetchError))
}

export const getObservableVenuesExplore = ({
  action,
}: {
  action: NAction.IAction
}) => {
  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_EXPLORE,
      param: {
        ...action.payload,
      },
    })
  ).pipe(switchMap(processFetchResponse), catchError(processFetchError))
}

export const getObservableVenuesLikes = ({
  action,
}: {
  action: NAction.IAction
}) => {
  const { venueId } = action.payload

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: generatePath(EApiPathnames.VENUES_LIKES, { venueId }),
      param: {},
    })
  ).pipe(switchMap(processFetchResponse), catchError(processFetchError))
}

export const getObservableVenuesListed = ({
  action,
}: {
  action: NAction.IAction
}) => {
  const { venueId } = action.payload

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: generatePath(EApiPathnames.VENUES_LISTED, { venueId }),
      param: {},
    })
  ).pipe(switchMap(processFetchResponse), catchError(processFetchError))
}

export const getObservableVenuesNextVenues = ({
  action,
}: {
  action: NAction.IAction
}) => {
  const { venueId } = action.payload

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: generatePath(EApiPathnames.VENUES_NEXT_VENUES, { venueId }),
      param: {},
    })
  ).pipe(switchMap(processFetchResponse), catchError(processFetchError))
}

export const getObservableVenuesSearch = ({
  action,
}: {
  action: NAction.IAction
}) => {
  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_SEARCH,
      param: {
        ...action.payload,
      },
    })
  ).pipe(switchMap(processFetchResponse), catchError(processFetchError))
}

export const getObservableVenuesSimilar = ({
  action,
}: {
  action: NAction.IAction
}) => {
  const { venueId } = action.payload

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: generatePath(EApiPathnames.VENUES_SIMILAR, { venueId }),
      param: {},
    })
  ).pipe(switchMap(processFetchResponse), catchError(processFetchError))
}

export const getObservableVenuesTrending = ({
  action,
}: {
  action: NAction.IAction
}) => {
  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_TRENDING,
      param: {
        ...action.payload,
      },
    })
  ).pipe(switchMap(processFetchResponse), catchError(processFetchError))
}

export const getObservableVenuesSuggestCompletion = ({
  action,
}: {
  action: NAction.IAction
}) => {
  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_SUGGEST_COMPLETION,
      param: {
        ...action.payload,
      },
    })
  ).pipe(switchMap(processFetchResponse), catchError(processFetchError))
}
