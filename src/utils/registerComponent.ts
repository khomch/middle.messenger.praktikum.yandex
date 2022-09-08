import Block from './Block'
import Handlebars from 'handlebars';

export function registerComponent(name: string, Component: typeof Block) {
  Handlebars.registerHelper(name, ({data, fn, hash}) => {
    const component = new Component(hash);

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

    // @ts-ignore

    const contents = fn ? fn(this) : '';

    return `<div data-id="${component.id}">${contents}</div>`
  })
}