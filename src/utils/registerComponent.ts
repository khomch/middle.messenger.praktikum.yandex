// @ts-ignore
import Handlebars from 'handlebars';
import { ComponentConstructable } from "../hocs/withRouter";

export function registerComponent(name: string, Component: ComponentConstructable<any>) {
  Handlebars.registerHelper(name, ({data, fn, hash}: any) => {
    const component = new Component(hash);

    console.log(hash)

    if (!data.root.children) {
      data.root.children = {};
    }

    if (!data.root.refs) {
      data.root.refs = {};
    }

    if (hash.ref) {
      data.root.refs[hash.ref] = component
      data.root.refs.error
    }

    data.root.children[component.id] = component;

    const contents = fn ? fn(this) : '';

    return `<div data-id="${component.id}">${contents}</div>`
  })
}