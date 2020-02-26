interface ILocationSearchParam {
  [key: string]: string | number | boolean | undefined
}

export interface GetLocationSearchProps {
  params: ILocationSearchParam
}

export const getLocationSearch = (
  { params = {} }: GetLocationSearchProps = { params: {} }
) => {
  const locationSearch = Object.keys(params)
    .filter(key => params[key] !== undefined && params[key] !== '')
    .map(
      key =>
        `${encodeURIComponent(key)}=${encodeURIComponent(`${params[key]}`)}`
    )
    .join('&')

  return (!!locationSearch && `?${locationSearch}`) || ''
}

export const getLocationHref = ({
  origin,
  pathname,
  params = {},
}: {
  origin: string
  pathname: string
} & GetLocationSearchProps) =>
  `${origin}${pathname}${getLocationSearch({ params })}`
