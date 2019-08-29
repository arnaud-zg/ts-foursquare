import { EUrlSeparator } from '../../src/constants/url'

describe('constants/url/EUrlSeparator', () => {
  it('should take a snapshot of EUrlSeparator', () => {
    expect(EUrlSeparator).toMatchSnapshot()
  })
})
