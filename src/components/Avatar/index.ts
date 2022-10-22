import Block from '../../utils/Block';
import styles from './avatar.sass'

interface IAvatar {
  src: string;
  alt: string;
  classModificator: string;
  styles: Record<string, string>
  noAvatarImage: string;
  events: {
    click: (e: Event) => void;
  }
  onClick: () => void;
}

export class Avatar extends Block<IAvatar> {
  constructor(props: IAvatar) {
    super({
        ...props,
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
          <div class="avatar {{classModificator}} alt="no_avatar"></div>
      `
    }

  }
}