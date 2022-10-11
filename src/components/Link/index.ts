import Block from '../../utils/Block';
import { PropsWithRouter, withRouter } from '../../hocs/withRouter';
import styles from './link.sass';

interface LinkProps extends PropsWithRouter {
  to: string;
  label: string;
  events?: {
    click: () => void;
  };
  styles: Record<string, string>;
}

class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: () => this.navigate()
      },
      styles
    });
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  render() {
    // language=hbs
    return `
    <span class="{{ styles.link }}">{{ label }}</span>
    `
  }
}

export const Link = withRouter(BaseLink);