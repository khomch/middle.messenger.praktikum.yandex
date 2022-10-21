import { EventBus } from "./EventBus";
import { nanoid } from 'nanoid';
// @ts-ignore
import Handlebars from "handlebars";

abstract class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  public id = nanoid(6);
  protected props: P;
  public children: Record<string, Block>;
  private eventBus: () => EventBus;
  private _element: HTMLElement | null = null;
  public refs: any;

  constructor(propsWithChildren: P) {
    const eventBus = new EventBus();
    const {
      props,
      children,
    } = this._getChildrenAndProps(propsWithChildren);
    this.children = children;
    this.refs = {};
    this.props = this._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  private _getChildrenAndProps(childrenAndProps: any): { props: P, children: Record<string, Block> } {
    const props: P = {} as P;
    const children: Record<string, Block<P>> = {};
    Object.entries(childrenAndProps).forEach(([key, value]: [keyof P, any]) => {
      if (value instanceof Block) {
        children[key as string] = value;
      }
      else {
        props[key] = value;
      }
    });
    return {
      props: props as P,
      children,
    };
  }

  private _addEvents() {
    const {events = {}} = this.props as P & { events: Record<string, () => void> };
    Object.keys(events).forEach(eventName => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
  }

  private _init() {
    this._createResources();

    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  protected componentDidMount() {
  }

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    Object.values(this.children).forEach(child => child.dispatchComponentDidMount());
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  //@ts-ignore
  protected componentDidUpdate(oldProps: P, newProps: P) {
    return true;
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const template: any = this.render();
    const fragment = this.compile(template, {...this.props, children: this.children, refs: this.refs});
    const newElement = fragment.firstElementChild as HTMLElement;
    this._element?.replaceWith(newElement)
    this._element = newElement;
    this._addEvents();
  }

  protected compile(template: string, context: any) {
    const contextAndStubs = {...context};

    const compiled = Handlebars.compile(template);

    const temp = document.createElement('template');

    temp.innerHTML = compiled(contextAndStubs);

    Object.entries(this.children).forEach(([_, component]) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

      if (!stub) {
        return;
      }

      component.getContent()?.append(...Array.from(stub.childNodes));
      stub.replaceWith(component.getContent()!);
    });

    return temp.content;
  }

  protected render(): string | void {
    return '';
  }

  public getContent() {
    return this.element;
  }

  private _makePropsProxy(props: P) {
    const self = this;
    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set: (target, prop: string, value) => {
        const oldTarget = {...target}

        target[prop as keyof P] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      }
    });
  }

  protected show() {
    this.getContent()!.style.display = "block";
  }

  protected hide() {
    this.getContent()!.style.display = "none";
  }

}

export default Block;
