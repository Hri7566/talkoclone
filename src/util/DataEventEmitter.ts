export interface IEvent<ID, Data> {
  id: ID;
  once: boolean;
  callback: (data: Data) => (void | Promise<void>);
}

export class DataEventEmitter<EventList extends Record<string, unknown>, K extends keyof EventList> {
  protected events = new Map<keyof EventList, IEvent<K, EventList[K]>[]>();

  public on(id: K, callback: IEvent<K, EventList[K]>["callback"]) {
    if (!this.events.has(id)) this.events.set(id, [] as IEvent<K, EventList[K]>[]);

    const list = this.events.get(id);
    if (!Array.isArray(list)) throw new Error(`Unable to access event list for event ID ${String(id)}`);

    list.push({
      id,
      once: false,
      callback
    });
  }

  public off(id: K, callback: IEvent<K, unknown>["callback"]) {
    if (!this.events.has(id)) return;

    const list = this.events.get(id);
    if (!Array.isArray(list)) throw new Error(`Unable to access event list for event ID ${String(id)}`);

    const ele = list.find(e => e.callback === callback);
    if (!ele) return;

    list.splice(list.indexOf(ele), 1);
  }

  public once(id: K, callback: IEvent<K, unknown>["callback"]) {
    if (!this.events.has(id)) this.events.set(id, [] as IEvent<K, EventList[K]>[]);

    const list = this.events.get(id);
    if (!Array.isArray(list)) throw new Error(`Unable to access event list for event ID ${String(id)}`);

    list.push({
      id,
      once: true,
      callback
    });
  }

  public emit(id: K, data: EventList[K]) {
    if (!this.events.has(id)) return;

    const list = this.events.get(id);
    if (!Array.isArray(list)) throw new Error(`Unable to access event list for event ID ${String(id)}`);

    for (const listener of list) {
      listener.callback(data);
    }

    if (id !== "_i") this.emit("__i" as K, { id: "__id" } as EventList[K]);
  }
}
