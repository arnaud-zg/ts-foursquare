import { EApiDefaultParameters, EApiPathnames } from '../../src/constants/api'

describe('EApiDefaultParameters', () => {
  it('should make a snapshot of EApiDefaultParameters', () => {
    expect(EApiDefaultParameters).toMatchSnapshot()
  })

  it('should make a snapshot of EApiPathnames', () => {
    expect(EApiPathnames).toMatchSnapshot()
  })
})
