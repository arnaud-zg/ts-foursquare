import { NHttpStatuses } from 'http-response-status'

export const mockingFetch = ({ response = {} } = {}) => {
  const mockJsonPromise = Promise.resolve(response)
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
    ok: true,
  })

  // @ts-ignore
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)
}

export const mockingFailingNotValidFetch = () => {
  const mockFetchPromise = Promise.resolve({
    ok: true,
    json: null,
  })

  // @ts-ignore
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)
}

export const mockingFailingNotFoundFetch = () => {
  const mockFetchPromise = Promise.resolve({
    ok: false,
    status: NHttpStatuses.EClientError.NOT_FOUND,
  })

  // @ts-ignore
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)
}
