import { EApiDefaultParameters, EApiPathnames } from '../../src/constants/api'
import { getLocationHref, getLocationSearch } from '../../src/utils/url'

describe('utils/url/getLocationSearch', () => {
  it('should return nothing', () => {
    expect(getLocationSearch()).toEqual(undefined)
    expect(getLocationSearch({ param: {} })).toEqual(undefined)
    expect(getLocationSearch({ param: { name: undefined } })).toEqual(undefined)
  })

  test.each`
    scenario                                      | param                                            | locationSearch
    ${'should generate a location search string'} | ${{ search: 'hello-world' }}                     | ${'?search=hello-world'}
    ${'should generate a location search string'} | ${{ search: 'hello world' }}                     | ${'?search=hello%20world'}
    ${'should generate a location search string'} | ${{ name: undefined, search: 'hello-world' }}    | ${'?search=hello-world'}
    ${'should generate a location search string'} | ${{ search: 'hello-world', withOptionA: true }}  | ${'?search=hello-world&withOptionA=true'}
    ${'should generate a location search string'} | ${{ search: 'hello-world', withOptionA: false }} | ${'?search=hello-world&withOptionA=false'}
    ${'should generate a location search string'} | ${{ page: 42, search: 'hello-world' }}           | ${'?page=42&search=hello-world'}
    ${'should generate a location search string'} | ${{ limit: 20, search: 'hello world !' }}        | ${'?limit=20&search=hello%20world%20!'}
    ${'should generate a location search string'} | ${{ limit: 20, search: 'hello world !' }}        | ${'?limit=20&search=hello%20world%20!'}
    ${'should generate a location search string'} | ${{ city: 'Séoul', search: '한국식 바베큐' }}    | ${'?city=S%C3%A9oul&search=%ED%95%9C%EA%B5%AD%EC%8B%9D%20%EB%B0%94%EB%B2%A0%ED%81%90'}
  `('$scenario with $param', ({ param, locationSearch }) => {
    expect(getLocationSearch({ param })).toEqual(locationSearch)
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
