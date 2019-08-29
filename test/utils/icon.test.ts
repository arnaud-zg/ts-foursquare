import { EIconSize, getIconUrlList } from '../../src/utils/icon'

describe('utils/icon/getIconUrlList', () => {
  it('should get a list of icon url', () => {
    const icon = {
      prefix: 'https://ss3.4sqi.net/img/categories_v2/food/steakhouse_',
      suffix: '.png',
    }

    expect(getIconUrlList(icon)).toMatchSnapshot()
  })
})

describe('utils/icon/EIconSize', () => {
  it('should make a snapshot of EIconSize', () => {
    expect(EIconSize).toMatchSnapshot()
  })
})
