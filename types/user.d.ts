export declare namespace NUser {
  interface IUser {
    id: string
    firstName: string
    gender: string
    photo: IUserPhoto
    type?: string
    lastName?: string
  }

  interface IUserPhoto {
    prefix: string
    suffix: string
  }
}
