import Block from '../../utils/Block';
import styles from './error-page.sass'
import Router from "../../utils/Router";

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
      onClick: (e: Event) => this.onClick(e),
      styles
    });
  }

  onClick(e: Event) {
    e.preventDefault()
    console.log(42)
    Router.back()
  }

  render() {
    if (window.location.pathname === '/404') {
      //language=hbs
      return `
          <section class="error-page">
              <div class="error-page__section">
                  <div class="error-page__number">404</div>
                  <div class="error-page__text">This is not the web page you are looking for</div>
                  {{#Button
                          class="text-link"
                          id="text-link"
                          name="back"
                          onClick=onClick
                          ref="back"
                  }}
                      Back
                  {{/Button}}
              </div>
          </section>
      `
    }

    else if (window.location.pathname === '/500') {
      //language=hbs
      return `
          <section class="error-page">
              <div class="error-page__section">
                  <div class="error-page__number">500</div>
                  <div class="error-page__text">Looks like something went wrong! Please come back later</div>
                  {{#Button
                          class="text-link"
                          id="text-link"
                          name="back"
                          onClick=onClick
                          ref="back"
                  }}
                      Back
                  {{/Button}}
              </div>
          </section>
      `
    }

  }
}
