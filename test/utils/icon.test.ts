import { getIconUrlList } from '../../src/utils/icon'

describe('getIconUrlList', () => {
  it('should get a list of icon url', () => {
    const icon = {
      prefix: 'https://ss3.4sqi.net/img/categories_v2/food/steakhouse_',
      suffix: '.png',
    }

    expect(getIconUrlList(icon)).toMatchSnapshot()
  })
})
