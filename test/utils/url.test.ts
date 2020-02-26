import { EApiDefaultParameters, EApiPathnames } from '../../src/constants/api'
import { getLocationHref, getLocationSearch } from '../../src/utils/url'

describe('utils/url/getLocationSearch', () => {
  it('should return nothing', () => {
    expect(getLocationSearch()).toEqual('')
    expect(getLocationSearch({ params: {} })).toEqual('')
    expect(getLocationSearch({ params: { name: undefined } })).toEqual('')
  })

  test.each`
    params                                           | locationSearch
    ${{ search: '' }}                                | ${''}
    ${{ search: 'hello-world' }}                     | ${'?search=hello-world'}
    ${{ search: 'hello world' }}                     | ${'?search=hello%20world'}
    ${{ name: '', search: 'hello-world' }}           | ${'?search=hello-world'}
    ${{ name: undefined, search: 'hello-world' }}    | ${'?search=hello-world'}
    ${{ search: 'hello-world', withOptionA: true }}  | ${'?search=hello-world&withOptionA=true'}
    ${{ search: 'hello-world', withOptionA: false }} | ${'?search=hello-world&withOptionA=false'}
    ${{ page: 42, search: 'hello-world' }}           | ${'?page=42&search=hello-world'}
    ${{ limit: 20, search: 'hello world !' }}        | ${'?limit=20&search=hello%20world%20!'}
    ${{ limit: 20, search: 'hello world !' }}        | ${'?limit=20&search=hello%20world%20!'}
    ${{ city: 'Séoul', search: '한국식 바베큐' }}    | ${'?city=S%C3%A9oul&search=%ED%95%9C%EA%B5%AD%EC%8B%9D%20%EB%B0%94%EB%B2%A0%ED%81%90'}
  `(
    'should generate a location search string with $params',
    ({ params, locationSearch }) => {
      expect(getLocationSearch({ params })).toEqual(locationSearch)
    }
  )
})

describe('utils/url/getLocationHref', () => {
  test.each`
    params
    ${undefined}
    ${{ search: '' }}
    ${{ search: 'hello-world' }}
    ${{ search: 'hello world', limit: 20 }}
    ${{ name: '', search: 'hello-world' }}
    ${{ name: undefined, search: 'hello-world' }}
    ${{ search: 'hello-world', withOptionA: true }}
    ${{ search: 'hello-world', withOptionA: false }}
    ${{ page: 42, search: 'hello-world' }}
    ${{ limit: 20, search: 'hello-world' }}
    ${{ page: 20, search: 'hello world !' }}
    ${{ city: 'Séoul', search: '한국식 바베큐' }}
  `('should generate a location href url with $params', ({ params }) => {
    expect(
      getLocationHref({
        origin: EApiDefaultParameters.ORIGIN,
        pathname: EApiPathnames.VENUES_SEARCH,
        params,
      })
    ).toMatchSnapshot()
  })
})
