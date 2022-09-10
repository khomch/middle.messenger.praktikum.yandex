import Block from '../../utils/Block';
import styles from './avatar.sass'

interface IAvatar {
  src: string,
  alt: string,
  classModificator: string,
  styles: Record<string, string>
}

export class Avatar extends Block<IAvatar> {
  constructor(props: IAvatar) {
    super({
        ...props,
        styles
      }
    )
  }

  render() {
    // language=hbs
    return `
        <img class="avatar {{classModificator}}" src="{{src}}" alt="{{alt}}"/>
    `
  }
}