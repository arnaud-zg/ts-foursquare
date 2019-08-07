enum EIconSize {
  S = '32',
  M = '44',
  L = '64',
  XL = '88',
}

interface IIcon {
  prefix: string
  suffix: string
}

interface IIconUrls {
  [EIconSize: string]: string
}

export const getIconUrlList = ({ prefix, suffix }: IIcon): IIconUrls =>
  Object.keys(EIconSize).reduce(
    (acc, iconKey: any) => ({
      ...acc,
      [iconKey]: `${prefix}${EIconSize[iconKey]}${suffix}`,
    }),
    {}
  )
