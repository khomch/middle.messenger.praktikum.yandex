import Block from '../../utils/Block';
import styles from './avatar.sass'

interface AvatarProps {
  src: string,
  alt: string,
  classModificator: string
}

export class Avatar extends Block {
  constructor(props: AvatarProps) {
    super({
      src: props.src,
      alt: props.alt,
      classModificator: props.classModificator,
      styles
    }
    );
  }

  render() {
    // language=hbs
    return `
        <img class="avatar {{classModificator}}" src="{{src}}" alt="{{alt}}" />
    `
  }
}