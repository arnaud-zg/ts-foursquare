import { mockingFetch } from '../../src/utils/test'

const data = {
  text: 'Hello World',
}

describe('mockingFetch()', () => {
  mockingFetch({
    response: {
      ...data,
    },
  })

  const fetchResult = fetch('https://api.tld.com/v2/randomEndpoint')

  it('should get a promise', () => {
    expect(fetchResult).toMatchSnapshot()
  })

  it('should get a success Response object', async () => {
    const response = await fetchResult
    expect(response).toMatchSnapshot()
  })

  it('should get response', async () => {
    const response = await fetchResult
    const data = await response.json()
    expect(data).toEqual({
      ...data,
    })
  })
})
