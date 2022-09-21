import Block from '../../utils/Block';
import styles from './profile.sass'
import { userData } from "../../fakeApi/userData";
import { profileLayout } from "./layouts/profileLayout";
import { profileEditLayout } from "./layouts/profileEditLayout";
import { profileEditPasswordLayout } from "./layouts/profileEditPasswordLayout";
import { IUserData } from "../../interfaces/IUser";
import { onSubmit } from "../../utils/validationOnSubmit";
import AuthController from "../../controllers/AuthController";
import { withStore } from "../../utils/Store";
import { getInputsValues } from "../../utils/getInputsValues";
import { ISignUpData } from "../../api/AuthAPI";

export interface IProfilePage {
  email: string;
  onSubmit: (e: Event) => void,
  onLogoutClick: (e: Event) => void,
  profileActionsClass: string,
  styles: Record<string, string>;
  userData: IUserData
}

class ProfilePageBase extends Block<IProfilePage> {
  constructor(props: IProfilePage) {
    super({
      ...props,
      onSubmit: (e: Event) => this.onSubmit(e),
      onLogoutClick: () => this.onLogoutClick(),
      userData,
      profileActionsClass: 'profile__actions',
      styles
    });
  }


  onSubmit(e: Event) {
    onSubmit(e, this.refs)
    const data = getInputsValues();

    AuthController.signup(data as ISignUpData);
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

const withUser = withStore((state) => ({ ...state.user }))

export const ProfilePage = withUser(ProfilePageBase);
