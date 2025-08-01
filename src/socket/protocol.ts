/**
 * Protocol data types
 **/

export interface ITag {
  text: string;
  color: string;
}

export interface IUser {
  id: string;
  name: string;
  location: string;
  tag: ITag;
}

export interface IParticipant {
}


/**
 * Event list (things the server broadcasts)
 **/

export interface IBaseEvent {
  id: string;
  timestamp: number;
}

export interface ISocketEvents extends Record<string, IBaseEvent> {
  "join": {
    id: "join";
    timestamp: number;
    participant: unknown; // TODO: participant data type
  };

  "channel_list": {
    id: "channel_list";
    timestamp: number;
    channels: unknown; // TODO: channel list type
  }
}

/**
 * Message list (things the clients notify the server of)
 **/

export interface IBaseMessage {
  id: string;
}

export interface ISocketMessages extends Record<string, IBaseMessage> {
  "hi": {
    id: "hi";
    timestamp: number;
  };

  "bye": {
    id: "bye";
  };

  "join": {
    id: "join";
    channelID: string;
  };

  "say": {
    id: "say";
    mode: "insert";
    text: string;
    index: number;
  } | {
    id: "say";
    mode: "replace";
    text: string;
  } | {
    id: "say";
    mode: "remove";
    index: number;
    count: number;
  };

  "get_channels": {
    id: "get_channels";
  }
}
