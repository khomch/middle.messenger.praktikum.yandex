import { EventBus } from "./EventBus";

export class WSSTransport extends EventBus {
  private instance: WebSocket | null = null

  constructor(user_id: number, chat_id: number, token_value: string) {
    super();

    const url = `wss://ya-praktikum.tech/ws/chats/${user_id}/${chat_id}/${token_value}`;

    const socket = new WebSocket(url)

    socket.onmessage = this.onmessage;
    socket.onerror = this.error;
    socket.onclose = this.close;
    socket.onopen = this.onopen;

    this.instance = socket;
  }

    onopen() {
      this.send(JSON.stringify({
        type: 'ping',
      }));
      this.emit('open')
      console.log('connect')
    }

    onmessage(e: any) {
      console.log(e)
      this.send(JSON.stringify({
        type: 'ping',
      }));
    }

    close (e: CloseEvent) {
      console.log(e)
    }

    error(e: any) {
      console.log(e)
    }

    send(data: any) {
      console.log(data, this.instance);
      this.instance?.send(data)
    }
}
