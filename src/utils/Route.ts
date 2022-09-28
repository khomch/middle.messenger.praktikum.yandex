import Block from "./Block";
import { render } from "./render";
export interface ComponentConstructable<P extends Record<string, any>> {
  new(props: P): Block<P>;
}


export class Route {
  private block: Block | null = null;

  constructor(
    private pathname: string,
    private readonly blockClass: ComponentConstructable<any>,
    private readonly query: string) {
  }

  leave() {
    this.block = null;
  }

  match(pathname: string) {
    return pathname === this.pathname;
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass({});
      render(this.query, this.block);
      return;
    }
  }
}