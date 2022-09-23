import Block from '../../utils/Block';
import styles from './modal-window.sass'

interface IModalWindow {
  events: {
    click: (e: Event) => void
  },
  closeModal: (e: Event) => void
  styles: Record<string, string>,
}

export class ModalWindow extends Block<IModalWindow> {

  constructor(props: IModalWindow) {
    super({
        ...props,
        events: {
          click: (e: Event) => this.closeModal(e)
        },
        closeModal: (e: Event) => this.closeModal(e),
        styles
      },
    );
  }

  public closeModal(e: Event) {
    const closeIcon = document.querySelector('.modal__close-icon')

    if (e.target === closeIcon || e.currentTarget === e.target) {
      const modalWindow = document.getElementById("modal-window")
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