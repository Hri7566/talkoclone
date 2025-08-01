import { DataEventEmitter } from "@/util/DataEventEmitter";
import type { ISocketEvents } from "./protocol";

let uri: string;
let isServer = false;

if (typeof window === "undefined") {
  isServer = true;
} else {
  isServer = false;

  let protocol = location.protocol === "https:" ? "wss:" : "ws:";
  let port = location.port;
  uri = `${protocol}//${location.hostname}${port}`;
}

export class Socket extends DataEventEmitter<ISocketEvents, keyof ISocketEvents> {
  public uri = uri;
  public isServer = isServer;

  constructor() {
    super();

    if (!isServer) console.debug("Starting socket");
  }
}
