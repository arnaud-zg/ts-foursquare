import { fromFetch } from 'rxjs/fetch'
import { catchError, map, switchMap } from 'rxjs/operators'
import { NRequest } from '../../types'
import {
  adaptGetVenuesCategories,
  adaptGetVenuesExplore,
  adaptGetVenuesLikes,
  adaptGetVenuesListed,
  adaptGetVenuesNextVenues,
  adaptGetVenuesSearch,
  adaptGetVenuesSimilar,
  adaptGetVenuesSuggestCompletion,
  adaptGetVenuesTrending,
} from '../adapter'
import { EApiDefaultParameters, EApiPathnames } from '../constants/api'
import { IStandaloneConfig } from '../standalone'
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
  ).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesCategories),
    catchError(processFetchError)
  )
}

export const getObservableVenuesExplore = ({
  payload,
}: {
  config?: IStandaloneConfig
  payload: NRequest.TVenuesExplorePayload
}) => {
  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_EXPLORE,
      param: {
        ...payload,
      },
    })
  ).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesExplore),
    catchError(processFetchError)
  )
}

export const getObservableVenuesLikes = ({
  payload,
}: {
  config?: IStandaloneConfig
  payload: NRequest.IVenuesLikesPayload
}) => {
  const { venueId } = payload

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: generatePath(EApiPathnames.VENUES_LIKES, { venueId }),
      param: {},
    })
  ).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesLikes),
    catchError(processFetchError)
  )
}

export const getObservableVenuesListed = ({
  payload,
}: {
  config?: IStandaloneConfig
  payload: NRequest.IVenuesListedPayload
}) => {
  const { venueId } = payload

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: generatePath(EApiPathnames.VENUES_LISTED, { venueId }),
      param: {},
    })
  ).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesListed),
    catchError(processFetchError)
  )
}

export const getObservableVenuesNextVenues = ({
  payload,
}: {
  config?: IStandaloneConfig
  payload: NRequest.IVenuesNextVenuesPayload
}) => {
  const { venueId } = payload

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: generatePath(EApiPathnames.VENUES_NEXT_VENUES, { venueId }),
      param: {},
    })
  ).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesNextVenues),
    catchError(processFetchError)
  )
}

export const getObservableVenuesSearch = ({
  payload,
}: {
  config?: IStandaloneConfig
  payload: NRequest.TVenuesSearchPayload
}) => {
  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_SEARCH,
      // @ts-ignore
      param: {
        ...payload,
      },
    })
  ).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesSearch),
    catchError(processFetchError)
  )
}

export const getObservableVenuesSimilar = ({
  payload,
}: {
  config?: IStandaloneConfig
  payload: NRequest.IVenuesSimilarPayload
}) => {
  const { venueId } = payload

  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: generatePath(EApiPathnames.VENUES_SIMILAR, { venueId }),
      param: {},
    })
  ).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesSimilar),
    catchError(processFetchError)
  )
}

export const getObservableVenuesSuggestCompletion = ({
  payload,
}: {
  config?: IStandaloneConfig
  payload: NRequest.TVenuesSuggestCompletionPayload
}) => {
  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_SUGGEST_COMPLETION,
      param: {
        ...payload,
      },
    })
  ).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesSuggestCompletion),
    catchError(processFetchError)
  )
}

export const getObservableVenuesTrending = ({
  payload,
}: {
  config?: IStandaloneConfig
  payload: NRequest.TVenuesTrendingPayload
}) => {
  return fromFetch(
    getLocationHref({
      origin: EApiDefaultParameters.ORIGIN,
      pathname: EApiPathnames.VENUES_TRENDING,
      param: {
        ...payload,
      },
    })
  ).pipe(
    switchMap(processFetchResponse),
    map(adaptGetVenuesTrending),
    catchError(processFetchError)
  )
}
