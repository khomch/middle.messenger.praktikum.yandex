import Block from '../../utils/Block';
import styles from './input-error.sass'

interface InputErrorProps {
  errorClass: string,
  errorText: string,
  ref: any
}

export class InputError extends Block {
  constructor(props: InputErrorProps) {
    super({
        errorClass: props.errorClass,
        errorText: props.errorText,
        styles
      }
    );
  }

  render() {
    // language=hbs
    return `
        <div class="error-container">
            <span class="{{errorClass}}" id="name-error">{{errorText}}</span>
        </div>
    `
  }
}