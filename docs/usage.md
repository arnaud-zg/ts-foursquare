# ts-foursquare

A JS client for working with <a href="https://developer.foursquare.com/docs/api" target="_blank">Foursquare APIs</a>

## Table of contents

- [Usage](#usage)
- [Overview](#overview)
- [Getting Started](#getting-started)
- [Actions](#actions)
  - [Life action](#life-action)
    - [putCredentials](#putCredentials)
  - [Lists action](#lists-action)
    - [getListsAsync](#getListsAsync)
  - [Photos action](#photos-action)
    - [getPhotosDetailsAsync](#getPhotosDetailsAsync)
  - [Venues action](#venues-action)
    - [getVenuesCategoriesAsync](#getVenuesCategoriesAsync)
    - [getVenuesExploreAsync](#getVenuesExploreAsync)
    - [getVenuesLikesAsync](#getVenuesLikesAsync)
    - [getVenuesListedAsync](#getVenuesListedAsync)
    - [getVenuesNextVenuesAsync](#getVenuesNextVenuesAsync)
    - [getVenuesSearchAsync](#getVenuesSearchAsync)
    - [getVenuesSimilarAsync](#getVenuesSimilarAsync)
    - [getVenuesSuggestCompletionAsync](#getVenuesSuggestCompletionAsync)
    - [getVenuesTrendingAsync](#getVenuesTrendingAsync)
- [Reducers](#reducers)
  - [Life reducer](#life-reducer)
  - [Venues reducer](#venues-reducer)
- [Selectors](#selectors)
  - [Life selectors](#life-selectors)
  - [Venues selectors](#venues-selectors)
- [Utils](##utils)
  - [Icon](#icon)
  - [Test](#test)
  - [url](#url)
    - [getLocationHref](#getLocationHref)
    - [getLocationSearch](#getLocationSearch)

## Usage

## Overview

## Getting Started

This quick start guide will get you up and running. Let's begin with a simple app with a list of venues.

### Requirements

Before we start, check that your computer or server meets the following requirements:

Node.js >= 10.x: Node.js is a server platform which runs JavaScript.

#### Search for a list of venues

##### Promise

```ts
const ts4S = new tsFoursquare({ clientId: '1234', clientSecret: '5678' })
ts4S
  .dispatchActionsAsync({
    actionsDispatch: [getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' })],
    actionCreatorsResolve: [
      getVenuesSearchAsync.cancel,
      getVenuesSearchAsync.failure,
      getVenuesSearchAsync.success,
    ],
  })
  .then((state: NStore.IState) => {
    const entities: { [key: string]: NVenue.IVenue } = venuesEntitiesSelector(state)
    console.log({ state, entities })
  })
  .catch((error: Error | string) => {
    console.log(error)
  })
  .finally(() => {
    // Do something if needed
  })
```

##### Async / Await

```ts
const getVenuesByLocation = async ({ ll }: NRequest.TVenuesSearchPayload) => {
  try {
    const ts4S = new tsFoursquare({ clientId: '1234', clientSecret: '5678' })
    const state: NStore.IState = await ts4S.dispatchActionsAsync({
      actionsDispatch: [
        getVenuesSearchAsync.request({ ll: '40.7099,-73.9622' }),
      ],
      actionCreatorsResolve: [
        getVenuesSearchAsync.cancel,
        getVenuesSearchAsync.failure,
        getVenuesSearchAsync.success,
      ],
    })
    console.log(state)
  } catch (error) {
    console.log(error)
  } finally {
    console.log('done')
  }
}
```

## Actions

### Life action

### putCredentials

> Put credentials into store, you'll only need to call this method only one time.

`putCredentials` create an enhanced action-creator with unlimited number of arguments.

- Resulting action-creator will preserve semantic names of their arguments (id, title, amount, etc...).

- Returned action object have predefined properties `({ type, payload, meta })`

##### Redux context

```js
const onFetchData = () => {
  putCredentials({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  })
}
```

### Lists action

#### getListsAsync

> Gives details about a list.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/lists/details" target="_blank">https://developer.foursquare.com/docs/api/lists/details</a></cite>

`getListsAsync` create an object containing four enhanced `action-creators` for handling async flows; `request`, `success`, `failure` and `cancel`.

##### Redux context

```js
const onFetchData = () => {
  getListsAsync.request({
    listId: '5580721e498e7c48540bf83f',
  })
}
```

### Photos action

#### getPhotosDetailsAsync

> Get details of a photo.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/photos/details" target="_blank">https://developer.foursquare.com/docs/api/photos/details</a></cite>

`getPhotosDetailsAsync` create an object containing four enhanced `action-creators` for handling async flows; `request`, `success`, `failure` and `cancel`.

##### Redux context

```js
const onFetchData = () => {
  getPhotosDetailsAsync.request({
    photoId: '51e4151c498e60b5d17bc721',
  })
}
```

### Venues action

#### getVenuesCategoriesAsync

> Returns a hierarchical list of categories applied to venues. This list is also available on our categories page.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/categories" target="_blank">https://developer.foursquare.com/docs/api/venues/categories</a></cite>

##### Redux context

```js
const onFetchData = () => {
  getVenuesCategoriesAsync.request()
}
```

#### getVenuesExploreAsync

> Returns a list of recommended venues near the current location. For more robust information about the venues themselves (photos/tips/etc.), please see our venue details endpoint.
>
> ~~If authenticated, the method will personalize the ranking based on you and your friends.~~ // @to-do
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/explore" target="_blank">https://developer.foursquare.com/docs/api/venues/explore</a></cite>

`getVenuesExploreAsync` create an object containing four enhanced `action-creators` for handling async flows; `request`, `success`, `failure` and `cancel`.

##### Redux context

```js
const onFetchData = () => {
  getVenuesExploreAsync.request({
    ll: '40.7099,-73.9622',
  })
}
```

#### getVenuesLikesAsync

> Returns friends and a total count of users who have liked this venue.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/likes" target="_blank">https://developer.foursquare.com/docs/api/venues/likes</a></cite>

`getVenuesLikesAsync` create an object containing four enhanced `action-creators` for handling async flows; `request`, `success`, `failure` and `cancel`.

##### Redux context

```js
const onFetchData = () => {
  getVenuesLikesAsync.request({
    venueId: '49b6e8d2f964a52016531fe3',
  })
}
```

#### getVenuesListedAsync

> Returns the lists that this venue appears on.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/listed" target="_blank">https://developer.foursquare.com/docs/api/venues/listed</a></cite>

`getVenuesListedAsync` create an object containing four enhanced `action-creators` for handling async flows; `request`, `success`, `failure` and `cancel`.

##### Redux context

```js
const onFetchData = () => {
  getVenuesListedAsync.request({
    venueId: '49b6e8d2f964a52016531fe3',
  })
}
```

#### getVenuesNextVenuesAsync

> Returns venues that people often check in to after the current venue.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/nextvenues" target="_blank">https://developer.foursquare.com/docs/api/venues/nextvenues</a></cite>

`getVenuesNextVenuesAsync` create an object containing four enhanced `action-creators` for handling async flows; `request`, `success`, `failure` and `cancel`.

##### Redux context

```js
const onFetchData = () => {
  getVenuesNextVenuesAsync.request({
    venueId: '49b6e8d2f964a52016531fe3',
  })
}
```

#### getVenuesSearchAsync

> Returns a list of venues near the current location, optionally matching a search term.
>
> To ensure the best possible results, pay attention to the intent parameter below.
>
> Note that most of the fields returned inside a venue can be optional. The user may create a venue that has no address, city, or state (the venue is created instead at the lat/long specified). Your client should handle these conditions safely. For more robust venue information (photos/tips/etc.), please see our venue details endpoint.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/search" target="_blank">https://developer.foursquare.com/docs/api/venues/search</a></cite>

`getVenuesSearchAsync` create an object containing four enhanced `action-creators` for handling async flows; `request`, `success`, `failure` and `cancel`.

##### Redux context

```js
const onFetchData = () => {
  getVenuesSearchAsync.request({
    query: 'peter steakhouse',
  })
}
```

#### getVenuesSimilarAsync

> Returns a list of venues similar to the specified venue.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/similar" target="_blank">https://developer.foursquare.com/docs/api/venues/similar</a></cite>

`getVenuesSimilarAsync` create an object containing four enhanced `action-creators` for handling async flows; `request`, `success`, `failure` and `cancel`.

##### Redux context

```js
const onFetchData = () => {
  getVenuesSimilarAsync.request({
    venueId: '49b6e8d2f964a52016531fe3',
  })
}
```

#### getVenuesSuggestCompletionAsync

> Returns a list of mini-venues partially matching the search term, near the location.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/suggestcompletion" target="_blank">https://developer.foursquare.com/docs/api/venues/suggestcompletion</a></cite>

`getVenuesSuggestCompletionAsync` create an object containing four enhanced `action-creators` for handling async flows; `request`, `success`, `failure` and `cancel`.

##### Redux context

```js
const onFetchData = () => {
  getVenuesSuggestCompletionAsync.request({
    ll: '40.7099,-73.9622',
    query: 'burger',
  })
}
```

#### getVenuesTrendingAsync

> Returns a list of venues near the current location with the most people currently checked in. For more robust information about the venues themselves (photos/tips/etc.), please see our venue details endpoint.
>
> -- <cite>Foursquare API - <a href="https://developer.foursquare.com/docs/api/venues/trending" target="_blank">https://developer.foursquare.com/docs/api/venues/trending</a></cite>

`getVenuesTrendingAsync` create an object containing four enhanced `action-creators` for handling async flows; `request`, `success`, `failure` and `cancel`.

##### Redux context

```js
const onFetchData = () => {
  getVenuesTrendingAsync.request({
    ll: '40.7099,-73.9622',
  })
}
```

## Helpers

### Standalone Store

// @to-do

## Reducers

### Life reducer

// @to-do

### Venues reducer

// @to-do

## Selectors

### Life selectors

// @to-do

### Venues selectors

// @to-do

## Utils

### Icon

// @to-do

### Test

// @to-do

### Url

#### getLocationSearch

Take a look at [getLocationHref](#getLocationHref)

#### getLocationHref

> The Location interface represents the location (URL) of the object it is linked to. Changes done on it are reflected on the object it relates to. Both the Document and Window interface have such a linked Location, accessible via Document.location and Window.location respectively.
>
> -- <cite>MDN web docs - <a href="https://developer.mozilla.org/en-US/docs/Web/API/Location" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/Location</a></cite>

```js
import { getLocationHref, getLocationSearch } from 'ts-foursquare'

const onFetch = async () => {
  return await fetch(
    getLocationHref({ origin, pathname, { query: 'burger' } })
  )
}
```
