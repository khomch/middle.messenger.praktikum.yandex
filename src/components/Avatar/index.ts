import Block from '../../utils/Block';
import styles from './avatar.sass'
import { noAvatar } from "../../fakeApi/noAvatar";

interface IAvatar {
  src: string,
  alt: string,
  classModificator: string,
  styles: Record<string, string>
  noAvatar: string,
  events: {
    click: (e: Event) => void,
  }
  onClick: () => void,
}

export class Avatar extends Block<IAvatar> {
  constructor(props: IAvatar) {
    super({
        ...props,
        noAvatar: noAvatar.url,
        events: {
          click: props.onClick
        },
        styles
      }
    )
  }

  render() {
    // language=hbs
    if (this.props.src) {
      return `
          <img class="avatar {{classModificator}}"
               src="{{src}}"
               alt="{{alt}}"
               id="{{id}}"
          />
      `
    }
    else {
      // language=hbs
      return `
          <img class="avatar {{classModificator}}" src="{{noAvatar}}" alt="no_avatar"/>
      `
    }

  }
}