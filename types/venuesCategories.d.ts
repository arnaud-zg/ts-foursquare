declare namespace NVenuesCategories {
  interface IResponse {
    categories: ICategory[]
  }

  interface ICategory {
    id: string
    name: string
    pluralName: string
    shortName: string
    icon: NIcon.IIcon
    categories: ICategory[]
  }
}
