import Block from '../../utils/Block';
import styles from './login.sass';
import { onSubmit } from "../../utils/validationOnSubmit";
import { getInputsValues } from "../../utils/getInputsValues";
import { ISignUpData } from "../../api/AuthAPI";
import AuthController from "../../controllers/AuthController";

export interface ILoginPage {
  onButtonClick: (e: Event) => void,
  onSubmit: (e: Event) => void,
  styles: Record<string, string>,
}

export class LoginPage extends Block<ILoginPage> {
  constructor(props: ILoginPage) {
    super({
      ...props,
      onButtonClick: (e: Event) => this.onButtonClick(e),
      onSubmit: (e: Event) => this.onSubmit(e),
      styles
    });
  }

  onButtonClick(e: Event) {
    e.preventDefault()
  }

  onSubmit(e: Event) {
    onSubmit(e, this.refs)

    const data = getInputsValues();

    AuthController.signin(data as ISignUpData);
  }

  render() {
    // language=hbs
    return `
        <div class="login">
            <form class="form" method="GET" action="#" name="Login">
                <div class="form__input-area form__input-area_bottom-margin-large">
                    <h1 class="form__title">Sign in to Messenger</h1>
                    {{#Input
                            inputContainerClass="form__input-floating-label-group"
                            labelClass="form__input-floating-label"
                            inputClass="form__input"
                            type="text"
                            name="login"
                            value=""
                            label="Login"
                            errorText="error in Login"
                            ref="login"

                    }}
                    {{/Input}}
                    {{#Input
                            inputContainerClass="form__input-floating-label-group"
                            labelClass="form__input-floating-label"
                            inputClass="form__input"
                            type="password"
                            name="password"
                            id="form-password"
                            value=""
                            label="Password"
                            errorText="error in Password"
                            ref="password"
                    }}
                    {{/Input}}
                </div>
                {{#Button
                        class="button"
                        type="submit"
                        id="button-id"
                        name="first-button"
                        onClick=onSubmit
                        ref="button"
                }}
                    Sign in
                {{/Button}}
                <div class="form__second-action-button"><a href="/sign-up" class="text-link">Create an account</a></div>
            </form>
        </div>
    `
  }
}
