interface ILocationSearchParam {
  [key: string]: string | number
}

export const getLocationSearch = (
  { param = {} }: { param: ILocationSearchParam } = { param: {} }
) => {
  const locationSearch = Object.keys(param)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(param[key])}`)
    .join('&')

  return locationSearch ? `?${locationSearch}` : undefined
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
