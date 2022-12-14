import { EventBus } from "./EventBus";

export enum WSTransportEvents {
  Connected = 'connected',
  Error = 'error',
  Message = 'message',
  Close = 'close',
}

export default class WSTransport extends EventBus {
  private socket: WebSocket | null = null;

  constructor(private url: string) {
    super()
  }

  public send(data: unknown) {
    if (!this.socket) {
      throw new Error('Socket is not connected');
    }

    this.socket?.send(JSON.stringify(data));
  }


  public connect(): Promise<void> {
    this.socket = new WebSocket(this.url)
    this.subscribe(this.socket)
    this.setupPing();

    return new Promise((resolve) => {
      this.on(WSTransportEvents.Connected, () => {
        resolve();
      })
    })
  }

  private setupPing() {
    setInterval(() => {
      this.send({type: 'ping'});
    }, 60000)
  }

  private subscribe(socket: WebSocket) {
    socket.addEventListener('open', () => {
      this.emit(WSTransportEvents.Connected)
    })

    socket.addEventListener('close', () => {
      this.emit(WSTransportEvents.Close)
    })

    socket.addEventListener('error', (e) => {
      this.emit(WSTransportEvents.Error, e)
    })

    socket.addEventListener('message', (message) => {
      this.emit(WSTransportEvents.Message, JSON.parse(message.data))
    })
  }


}