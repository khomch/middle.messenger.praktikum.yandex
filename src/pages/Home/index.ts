import Block from '../../utils/Block';
import styles from './home.sass'
import { linksList, ILinksList } from "../../fakeApi/linksList";

interface HomePageProps {
  linksList: ILinksList,
  styles?: Record<string, string>
}

export class HomePage extends Block<HomePageProps> {
  constructor(props: HomePageProps) {
    super({
      ...props,
      linksList: linksList,
      styles
    });
  }

  render() {
    //language=hbs
    return `
        <section>
                <h1 class="home-title">AX Messenger</h1>
                <ul class="links__list">
                    {{linksList.title}}
                    {{#each linksList.links}}
                        <li>
                            <a class="links__list-item" href={{this.link}}>{{this.title}}</a>
                        </li>
                    {{/each}}
                </ul>
        </section>
    `
  }
}
