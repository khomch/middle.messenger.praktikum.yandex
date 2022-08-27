import noAvatar from "../static/no-avatar.svg";

interface IUserData {
    avatarUrl: string,
    avatarAlt: string,
    email: string,
    login: string,
    firstName: string,
    lastName: string,
    displayName: string,
    phone: string
}

export const userData: IUserData = {
    avatarUrl: noAvatar,
    avatarAlt: 'Ivan',
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    firstName: 'Ivan',
    lastName: 'Ivanov',
    displayName: 'Vanya',
    phone: '+7(999)322-22-22'
}