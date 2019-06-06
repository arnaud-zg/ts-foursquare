import { EUrlSeparator } from '../../src/constants/url'

describe('Life', () => {
  it('should return life state', () => {
    expect(EUrlSeparator).toMatchSnapshot()
  })
})
