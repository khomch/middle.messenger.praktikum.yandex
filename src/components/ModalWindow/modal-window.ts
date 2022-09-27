import Block from '../../utils/Block';
import styles from './modal-window.sass'

interface IModalWindow {
  events: {
    click: (e: Event) => void;
    submit: (e: Event) => void;
  },
  closeModal: (e: Event) => void;
  styles: Record<string, string>;
  onSubmit: (e: Event) => void;
}

export class ModalWindow extends Block<IModalWindow> {

  constructor(props: IModalWindow) {
    super({
        ...props,
        events: {
          click: (e: Event) => this.closeModal(e),
          submit: props.onSubmit,
        },
        closeModal: (e: Event) => this.closeModal(e),
        styles
      },
    );
  }

  public closeModal(e: Event) {
    const targetId = (e.target as Element).id;
    if (targetId === 'close-icon' || e.currentTarget === e.target) {
      const modalWindow = e.currentTarget as Element;
      modalWindow!.classList.remove('modal-window_visible')
    }
  }

  render() {
    // language=hbs
    return `
        <section class="modal-window {{modalState}}" id="{{id}}">
          
        </section>
    `
  }
}