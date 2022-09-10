import Block from '../../utils/Block';
import styles from './button.sass'

interface IButton {
  label: string,
  events: {
    click: (e: Event) => void,
  }
  onClick: () => void,
  class: string,
  type: string,
  id: string,
  name: string,
  styles: Record<string, string>
}

export class Button extends Block<IButton> {
  constructor(props: IButton) {
    super({
      ...props,
      events: {
        click: props.onClick
      },
      styles
    }
    );
  }

  render() {
    // language=hbs
    return `
    <button type="{{type}}" class="{{class}}" id="{{id}}" name="{{name}}">{{label}}</button>
    `
  }
}