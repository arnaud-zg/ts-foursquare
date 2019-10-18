import { NIcon } from '../../types/icon.d'
import { EIconSize } from '../constants/icon'

interface IIconUrls {
  [iconSize: string]: string
}

export const getIconUrlList = ({ prefix, suffix }: NIcon.IIcon): IIconUrls =>
  Object.keys(EIconSize).reduce(
    (acc, iconKey) => ({
      ...acc,
      [iconKey]: `${prefix}${
        // Ugly typescript hack
        (EIconSize as { [key: string]: any })[iconKey]
      }${suffix}`,
    }),
    {}
  )
