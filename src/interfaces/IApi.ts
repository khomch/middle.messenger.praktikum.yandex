export interface IUsersRequest {
  users: number[],
  chatId: number
}

export interface IChangeProfile {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string
}

export interface IChangePassword {
  oldPassword: string,
  newPassword: string
}

