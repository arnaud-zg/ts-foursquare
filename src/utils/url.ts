type TLocationSearchParam = string | number | boolean

interface ILocationSearchParam {
  [key: string]: TLocationSearchParam | undefined
}

export const getLocationSearch = (
  { param = {} }: { param: ILocationSearchParam } = { param: {} }
) => {
  const locationSearch = Object.keys(param)
    .filter(key => !(param[key] === undefined))
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(`${param[key]}`)}`
    )
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
