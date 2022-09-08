import Block from '../../utils/Block';
import styles from './input.sass'
import { inputValidator } from "../../utils/validation/inputValidator";

interface InputProps {
  onFocus: void,
  onBlur: void,
  class: string,
  type: string,
  name: string,
  id: string,
  value: string,
  required: string,
  aria: string,
  label: string,
  errorClass: string,
  errorText: string,
  refs: string,
  tries: number,
}


export class Input extends Block {
  validationTries = 0;

  constructor(props: InputProps) {
    super({
        ...props,
        events: {
          focusin: (e: Event) => this.validationHandler(e),
          focusout: (e: Event) => this.validationHandler(e),

        },
        class: props.class,
        type: props.type,
        name: props.name,
        id: props.id,
        value: props.value,
        required: props.required,
        label: props.label,
        errorClass: 'form__error',
        errorText: props.errorText,
        doValidation: false,
        styles
      },
    );
  }

  public validationHandler(e: Event) {
    const target = e.target as HTMLInputElement;
    const isValid: boolean = inputValidator(target.name, target.value)
    if (this.validationTries === 0 && target.value === '') {
      this.validationTries++
      return
    }
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
            {{#InputError
                    errorClass=errorClass
                    errorText=errorText
                    ref="error"
            }}
            {{/InputError}}
        </div>
    `
  }
}