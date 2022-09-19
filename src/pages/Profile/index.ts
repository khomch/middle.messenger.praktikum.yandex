import Block from '../../utils/Block';
import styles from './profile.sass'
import { userData } from "../../fakeApi/userData";
import { profileLayout } from "./layouts/profileLayout";
import { profileEditLayout } from "./layouts/profileEditLayout";
import { profileEditPasswordLayout } from "./layouts/profileEditPasswordLayout";
import { IUserData } from "../../interfaces/IUser";
import { onSubmit } from "../../utils/validationOnSubmit";

export interface IProfilePage {
  onSubmit: (e: Event) => void,
  profileActionsClass: string,
  styles: Record<string, string>;
  userData: IUserData
}

export class ProfilePage extends Block<IProfilePage> {
  constructor(props: IProfilePage) {
    super({
      ...props,
      onSubmit: (e: Event) => this.onSubmit(e),
      userData,
      profileActionsClass: 'profile__actions',
      styles
    });
  }


  onSubmit(e: Event) {
    onSubmit(e, this.refs)
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
    return this.getLayout();
  }
}
