import Block from '../../utils/Block';
import styles from './error-page.sass'

interface ErrorPageProps {
  errorNumber: string,
  text: string,
  link: string
}

export class ErrorPage extends Block {
  constructor(props: ErrorPageProps) {
    super({
      ...props,
      text: props.text,
      link: props.link,
      styles
    });
  }

  render() {
    //language=hbs
    return `
        <section class="error-page">
            <div class="error-page__section">
                <div class="error-page__number">{{errorNumber}}</div>
                <div class="error-page__text">{{text}}</div>
                <a class="text-link" href={{link}}>Back</a>
            </div>
        </section>
    `
  }
}
