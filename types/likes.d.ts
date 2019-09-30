export declare namespace NLikes {
  interface IResponse {
    likes: ILikes
  }

  interface ILikes {
    count: number
    summary: string
    items: IItem[]
  }

  interface IItem {
    id: string
    firstName: string
    lastName: string
    gender: string
    photo: IPhoto
  }

  interface IPhoto {
    prefix: string
    suffix: string
  }
}
