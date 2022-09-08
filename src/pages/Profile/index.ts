import Block from '../../utils/Block';
import styles from './profile.sass'
import { userData } from "../../fakeApi/userData";
import { profileLayout } from "./layouts/profileLayout";
import { profileEditLayout } from "./layouts/profileEditLayout";
import { profileEditPasswordLayout } from "./layouts/profileEditPasswordLayout";

interface ProfilePageProps {
  path: string,
  profileActionsClass: string
}

let layout = ''

export class ProfilePage extends Block {
  constructor(props: ProfilePageProps) {
    super({
      ...props,
      onSubmit: (e: Event) => this.onSubmit(e),
      path: props.path,
      userData,
      profileActionsClass: 'profile__actions',
      styles
    });
  }

  getInputsValues(): HTMLInputElement[] {
    return super.getInputsValues();
  }

  onSubmit(e: Event) {
    super.onSubmit(e);
  }

  setLayout() {
    if (this.props.path === '/profile') {
      return layout = profileLayout
    }
    else if (this.props.path === '/profile-edit') {
      return layout = profileEditLayout
    }
    else if (this.props.path === '/profile-edit-password') {
      return layout = profileEditPasswordLayout
    }
  }


  render() {
    this.setLayout()
    // language=hbs
    return layout
  }
}
