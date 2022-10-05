import WSTransport, { WSTransportEvents } from "../utils/WSTransport";
import store from "../utils/Store";

class MessagesController {
  private sockets: Map<number, WSTransport> = new Map();

  async connect(id: number, token: string) {
    if (this.sockets.has(id)) {
      return
    }

    const userId = store.getState().userId;

    const wsTransport = new WSTransport(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`)

    this.sockets.set(id, wsTransport);

    await wsTransport.connect();

    this.subscribe(wsTransport, id);
    this.fetchOldMessages(id);
  }

  sendMessage(id: number, message: string) {
    const socket = this.sockets.get(id);

    if (!socket) {
      throw new Error(`Chat ${id} is not connected`);
    }

    socket.send({
      type: 'message',
      content: message
    })

  }

  fetchOldMessages(id: number) {
    const socket = this.sockets.get(id);

    if (!socket) {
      throw new Error(`Chat ${id} is not connected`);
    }

    socket.send({type: 'get old', content: '0'})
  }

  private onMessage(id: number, message: any) {
    console.log(id, message)
  }

  private onClose(id: number) {
    this.sockets.delete(id)
  }

  private subscribe(transport: WSTransport, id: number) {
    transport.on(WSTransportEvents.Message, (message) => this.onMessage(id, message))
    transport.on(WSTransportEvents.Close, () =>  this.onClose.bind(id))
  }

}

export default new MessagesController();