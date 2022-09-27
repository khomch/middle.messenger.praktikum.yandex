import Block from '../../utils/Block';
import styles from './profile.sass'
import { userData } from "../../fakeApi/userData";
import { profileLayout } from "./layouts/profileLayout";
import { profileEditLayout } from "./layouts/profileEditLayout";
import { profileEditPasswordLayout } from "./layouts/profileEditPasswordLayout";
import { IUserData } from "../../interfaces/IUser";
import { validationOnSubmit } from "../../utils/validationOnSubmit";
import AuthController from "../../controllers/AuthController";
import { withStore } from "../../utils/Store";
import { getInputsValues } from "../../utils/getInputsValues";
import UserController from "../../controllers/UserController";
import { IChangePassword, IChangeProfile } from "../../interfaces/IApi";

export interface IProfilePage {
  email: string;
  onSubmit: (e: Event) => void;
  onAvatarSubmit: (e: Event) => void;
  onAvatarButtonClick: (e: Event) => void;
  onPasswordChangeSubmit: (e: Event) => void;
  onLogoutClick: (e: Event) => void;
  profileActionsClass: string;
  styles: Record<string, string>;
  linkToAvatar: string;
  avatar: string;
  userData: IUserData;
}

class ProfilePageBase extends Block<IProfilePage> {
  constructor(props: IProfilePage) {
    super({
      ...props,
      linkToAvatar: props.avatar,
      onSubmit: (e: Event) => this.onSubmit(e),
      onAvatarSubmit: (e: Event) => this.onAvatarSubmit(e),
      onAvatarButtonClick: (e: Event) => this.onAvatarButtonClick(e),
      onLogoutClick: () => this.onLogoutClick(),
      onPasswordChangeSubmit: (e) => this.onPasswordChangeSubmit(e),
      userData,
      profileActionsClass: 'profile__actions',
      styles
    });
  }


  onSubmit(e: Event) {
    validationOnSubmit(e, this.refs)
    const data = getInputsValues();

    UserController.changeProfile(data as IChangeProfile);
  }

  onAvatarButtonClick(e: Event) {
    const avatar: any = document.getElementById('avatar');
    avatar.click()
    this.refs.avatar.setProps({
      class: "button",
      label: "Save Avatar"
    })

    e.preventDefault()
  }

  onPasswordChangeSubmit(e: Event) {
    const validation: { isValid: boolean, error?: string } = validationOnSubmit(e, this.refs)
    e.preventDefault()
    const passwords = getInputsValues()
    if (validation.isValid) {
      UserController.changePassword(passwords as IChangePassword)
    }
    else {
      this.refs.onPasswordChangeSubmit.setProps({label: validation.error, class: 'button button_error'})
    }
  }

  onAvatarSubmit(e: Event) {
    e.preventDefault()
    const avatar: any = document.getElementById('avatar');
    const file = avatar.files[0]
    const formData = new FormData();
    formData.append('avatar', file);

    UserController.changeAvatar(formData);
  }

  onLogoutClick() {
    AuthController.logout();
  }

  getLayout() {
    if (window.location.pathname === '/settings') {
      return profileLayout
    }
    else if (window.location.pathname === '/settings-edit') {
      return profileEditLayout
    }
    else if (window.location.pathname === '/settings-edit-password') {
      return profileEditPasswordLayout
    }
  }

  render() {
    AuthController.fetchUser();
    return this.getLayout();
  }
}

const withUser = withStore((state) => ({...state.user}))

export const ProfilePage = withUser(ProfilePageBase);
