import Block from '../../utils/Block';
import styles from './button.sass'

interface ButtonProps {
  label: string,
  onClick: ()=> void,
  class: string,
  type: string,
  id: string,
  name: string
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      label: props.label,
      events: {
        click: props.onClick
      },
      class: props.class,
      type: props.type,
      id: props.id,
      name: props.name,
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