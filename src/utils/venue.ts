import { NEntity, NVenueListed } from '../../types'

export const getVenuesListedGroupKey = (
  group: NEntity.IEntityGroup<NVenueListed.IGroupItem>
) => `${group.type}-${group.name}`
