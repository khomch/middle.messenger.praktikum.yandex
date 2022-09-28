import Block from '../utils/Block';
import Router from '../utils/Router';

export interface ComponentConstructable<P extends Record<string, any>> {
  new(props: P): Block<P>;
}

export function withRouter(Component: ComponentConstructable<any>) {
  type Props = ComponentConstructable<any>;

  return class WithRouter extends Component {
    constructor(props: Props & PropsWithRouter) {
      super({...props, router: Router});
    }
  }
}

export interface PropsWithRouter {
  router: typeof Router;
}