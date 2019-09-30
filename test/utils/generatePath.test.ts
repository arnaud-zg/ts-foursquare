import { EApiPathnames } from '../../src/constants/api'
import { generatePath } from '../../src/utils/generatePath'

describe('utils/icon/generatePath', () => {
  it('should get default url pathname', () => {
    expect(generatePath()).toMatchSnapshot()
  })

  it('should get url pathname', () => {
    expect(generatePath(EApiPathnames.VENUES_EXPLORE)).toMatchSnapshot()
    expect(generatePath(EApiPathnames.VENUES_EXPLORE, {})).toMatchSnapshot()
  })

  it('should get url pathname with given parameters', () => {
    expect(
      generatePath(EApiPathnames.VENUES_LIKES, {
        venueId: '3fd66200f964a5209beb1ee3',
      })
    ).toMatchSnapshot()
  })
})
