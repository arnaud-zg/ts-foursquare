import { EApiDefaultParameters, EApiPathnames } from '../../src/constants/api'
import { getLocationHref, getLocationSearch } from '../../src/utils/url'

describe('utils/url/getLocationSearch', () => {
  it('should return nothing', () => {
    expect(getLocationSearch()).toEqual(undefined)
    expect(getLocationSearch({ param: {} })).toEqual(undefined)
  })

  it('should generate a location search string', () => {
    expect(getLocationSearch({ param: { search: 'hello-world' } })).toEqual(
      '?search=hello-world'
    )
    expect(getLocationSearch({ param: { search: 'hello world' } })).toEqual(
      '?search=hello%20world'
    )
    expect(
      getLocationSearch({ param: { search: 'hello world', limit: 20 } })
    ).toEqual('?search=hello%20world&limit=20')
  })
})

describe('utils/url/getLocationHref', () => {
  it('should generate a location href url', () => {
    expect(
      getLocationHref({
        origin: EApiDefaultParameters.ORIGIN,
        pathname: EApiPathnames.VENUES_SEARCH,
        param: { search: 'hello-world' },
      })
    ).toMatchSnapshot()
    expect(
      getLocationHref({
        origin: EApiDefaultParameters.ORIGIN,
        pathname: EApiPathnames.VENUES_SEARCH,
        param: { search: 'hello-world', limit: 20 },
      })
    ).toMatchSnapshot()
  })
})
