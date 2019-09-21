interface ILocationSearchParam {
  [key: string]: string | number | boolean | undefined
}

export const getLocationSearch = (
  { param = {} }: { param: ILocationSearchParam } = { param: {} }
) => {
  const locationSearch = Object.keys(param)
    .filter(
      key =>
        !(param[key] === undefined) &&
        !!(
          typeof param[key] !== 'string' ||
          (typeof param[key] === 'string' && param[key] !== '')
        )
    )
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(`${param[key]}`)}`
    )
    .join('&')

  return (!!locationSearch && `?${locationSearch}`) || ''
}

export const getLocationHref = ({
  origin,
  pathname,
  param = {},
}: {
  origin: string
  pathname: string
  param?: ILocationSearchParam
}) => `${origin}${pathname}${getLocationSearch({ param })}`
