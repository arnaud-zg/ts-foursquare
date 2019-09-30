import pathToRegexp from 'path-to-regexp'

const compilePath = (path: string) => pathToRegexp.compile(path)

/**
 * Public API for generating a URL pathname from a path and parameters.
 * https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/generatePath.js#L20
 */
export const generatePath = (path = '/', params = {}) =>
  path === '/' ? path : compilePath(path)(params)
