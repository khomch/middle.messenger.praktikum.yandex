import Block from '../../utils/Block';
import styles from './signup.sass';
import { validationOnSubmit } from "../../utils/validationOnSubmit";
import { getInputsValues } from "../../utils/getInputsValues";
import AuthController from "../../controllers/AuthController";
import { ISignUpData } from "../../api/AuthAPI";

export interface ISignUpPage {
  onSubmit: (e: Event) => void,
  styles: Record<string, string>
}

export class SignupPage extends Block<ISignUpPage> {
  constructor(props: ISignUpPage) {
    super({
      ...props,
      onSubmit: (e: Event) => this.onSubmit(e),
      styles
    });
  }

  onSubmit(e: Event) {
    validationOnSubmit(e, this.refs)
    const data = getInputsValues();

    AuthController.signup(data as ISignUpData);
  }


  render() {
    // language=hbs
    return `
        <section class="signup">
            <form class="form" method="GET" action="#" name="Signup">
                <div class="form__input-area form__input-area_bottom-margin-small">
                    <h1 class="form__title">Sign up</h1>
                    {{#Input
                            inputContainerClass="form__input-floating-label-group"
                            labelClass="form__input-floating-label"
                            inputClass="form__input"
                            type="text"
                            name="first_name"
                            value=""
                            required="required"
                            label="First name"
                            errorClass="form__error"
                            errorText="error in First name"
                            ref="first_name"
                    }}
                    {{/Input}}
                    {{#Input
                            inputContainerClass="form__input-floating-label-group"
                            labelClass="form__input-floating-label"
                            inputClass="form__input"
                            type="text"
                            name="second_name"
                            value=""
                            required="required"
                            label="Second name"
                            errorText="error in Second name"
                            ref="second_name"

                    }}
                    {{/Input}}
                    {{#Input
                            inputContainerClass="form__input-floating-label-group"
                            labelClass="form__input-floating-label"
                            inputClass="form__input"
                            type="text"
                            name="login"
                            value=""
                            required="required"
                            label="Login"
                            errorText="error in Login"
                            ref="login"

                    }}
                    {{/Input}}
                    {{#Input
                            inputContainerClass="form__input-floating-label-group"
                            labelClass="form__input-floating-label"
                            inputClass="form__input"
                            type="email"
                            name="email"
                            value=""
                            required="required"
                            label="Email"
                            errorText="error in Email"
                            ref="email"

                    }}
                    {{/Input}}
                    {{#Input
                            inputContainerClass="form__input-floating-label-group"
                            labelClass="form__input-floating-label"
                            inputClass="form__input"
                            type="phone"
                            name="phone"
                            value=""
                            required="required"
                            label="Phone"
                            errorText="error in Phone"
                            ref="phone"

                    }}
                    {{/Input}}
                    {{#Input
                            inputContainerClass="form__input-floating-label-group"
                            labelClass="form__input-floating-label"
                            inputClass="form__input"
                            type="password"
                            name="password"
                            value=""
                            required="required"
                            label="Password"
                            errorText="error in Password"
                            ref="password"
                    }}
                    {{/Input}}
                    {{#Input
                            inputContainerClass="form__input-floating-label-group"
                            labelClass="form__input-floating-label"
                            inputClass="form__input"
                            type="password"
                            name="password_repeat"
                            value=""
                            required="required"
                            label="Password (again)"
                            errorText="error in Password"
                            ref="password_repeat"
                    }}
                    {{/Input}}
                </div>
                {{#Button class="button" type="submit" onClick=onSubmit}}
                    Sign up
                {{/Button}}
                <div class="form__second-action-button"><a href="/login" class="text-link">I already have an account</a>
                </div>
            </form>
        </section>
    `
  }
}
