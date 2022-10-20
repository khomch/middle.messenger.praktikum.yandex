import { ComponentConstructable, Route } from "./Route";

export interface IAccess {
  user: Record<string, string> | undefined,
  isPrivate: boolean
}

class Router {
  private static __instance: Router;
  private routes: Route[] = [];
  private currentRoute: Route | null = null;
  private history = window.history;

  constructor(private readonly rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];

    Router.__instance = this;
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this.currentRoute && this.currentRoute !== route) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;

    route.render();
  }

  private getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname));
  }


  public use(pathname: string, block: ComponentConstructable<any>, access: IAccess) {
    const route = new Route(pathname, block, this.rootQuery);

    if (pathname === window.location.pathname) {
      if (access.isPrivate && !access.user) {
        this.go('/');
      }
      else if (!access.isPrivate && access.user) {
        this.go('/messenger');
      }
      else this.routes.push(route);

    } else {
      this.routes.push(route)
    }

    return this;
  }

  public start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window;

      this._onRoute(target.location.pathname);
    }

    this._onRoute(window.location.pathname);
  }


  public go(pathname: string) {
    this.history.pushState({}, '', pathname);

    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

}

export default new Router('#app');