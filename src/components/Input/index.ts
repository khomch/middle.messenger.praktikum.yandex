import Block from '../../utils/Block';
import styles from './input.sass'
import { inputValidator } from "../../utils/validation/inputValidator";

interface IInput {
  onFocus: (e: Event) => void,
  onBlur: (e: Event) => void,
  events: {
    focusin: (e: Event) => void,
    focusout: (e: Event) => void,

  }
  class: string,
  type: string,
  name: string,
  id: string,
  value: string,
  required: string,
  label: string,
  errorClass: string,
  errorText: string,
  refs: string,
  tries: number,
  styles: Record<string, string>,
  doValidation: boolean,
  validationHandler: (e: Event) => void,
}


export class Input extends Block<IInput> {
  constructor(props: IInput) {
    super({
        ...props,
        events: {
          focusin: (e: Event) => this.validationHandler(e),
          focusout: (e: Event) => this.validationHandler(e),
        },
        errorClass: 'form__error',
        doValidation: false,
        styles
      },
    );
  }

  public validationHandler(e: Event) {
    const target = e.target as HTMLInputElement;
    const isValid: boolean = inputValidator(target.name, target.value)
    if (!isValid) {
      this.refs.error.setProps({errorClass: 'form__error form__error_visible'})
    }
    else {
      this.refs.error.setProps({errorClass: 'form__error'})
    }
  }

  render() {
    // language=hbs
    return `
        <div class="{{inputContainerClass}}">
            <input
                    class="{{inputClass}}"
                    type="{{type}}"
                    name="{{name}}"
                    id="{{id}}"
                    value="{{value}}"
                    aria-label="{{name}}"
                    placeholder="{{placeholder}}"
                {{disabled}}
                {{required}}
            >
            <label class="{{labelClass}}">{{label}}</label>
            {{#ErrorLabel
                    errorClass=errorClass
                    errorText=errorText
                    ref="error"
            }}
            {{/ErrorLabel}}
        </div>
    `
  }
}