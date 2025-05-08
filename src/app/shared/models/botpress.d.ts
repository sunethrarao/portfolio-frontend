interface BotpressWebChat {
  sendEvent: (event: { type: string }) => void;
}

interface Botpress {
  init: (config: any) => void;
}

interface Window {
  botpressWebChat?: BotpressWebChat;
  botpress?: Botpress;
}
