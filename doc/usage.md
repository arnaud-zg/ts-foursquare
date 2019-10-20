# ts-foursquare

A JS client for working with <a href="https://developer.foursquare.com/docs/api" target="_blank">Foursquare APIs</a>

Works in Node and with any browser that support javascript.

## Table of contents

- [Usage](#usage)
- [Overview](#overview)
- [Actions](#actions)
  - [Life action](#life-action)
    - [putCredentials](#putCredentials)
  - [Venues action](#venues-action)
    - [getVenuesCategoriesAsync](#getVenuesCategoriesAsync)
    - [getVenuesExploreAsync](#getVenuesExploreAsync)
    - [getVenuesSearchAsync](#getVenuesSearchAsync)
    - [getVenuesSuggestCompletionAsync](#getVenuesSuggestCompletionAsync)
    - [getVenuesTrendingAsync](#getVenuesTrendingAsync)
- [Helpers](#helpers)
  - [Standalone Store](#standalone-store)
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

// @to-do

## Overview

// @to-do

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
