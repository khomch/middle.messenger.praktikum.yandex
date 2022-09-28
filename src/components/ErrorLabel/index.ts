import Block from '../../utils/Block';
import styles from './error-label.sass'

interface IErrorLabel {
  errorClass: string;
  errorText: string;
  ref: any;
  styles: Record<string, string>;
}

export class ErrorLabel extends Block<IErrorLabel> {
  constructor(props: IErrorLabel) {
    super({
        ...props,
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