import { NVenueListed } from '../../types'

export const getVenuesListedGroupKey = (group: NVenueListed.IGroup) =>
  `${group.type}-${group.name}`
