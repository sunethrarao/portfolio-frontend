// window.botpress.init({
//   "botId": "e941e17f-a9fb-4101-887e-80761bdcafde",
//   "configuration": {
//     "botName": "ChatWithMe",
//     "botDescription": "Chat Bot for contacting support",
//     "website": {},
//     "email": {
//       "title": "sunethrarao@gmail.com",
//       "link": "sunethrarao@gmail.com"
//     },
//     "phone": {},
//     "termsOfService": {},
//     "privacyPolicy": {},
//     "color": "#d6409f",
//     "variant": "soft",
//     "themeMode": "light",
//     "fontFamily": "inter",
//     "radius": 1
//   },
//   "clientId": "1b816468-fd15-4f12-9e18-0c9df1d17b62"
// });

import { APP_INITIALIZER } from '@angular/core';
import { BotpressService } from '../../shared/services/botpress.service';

export function initializeBotpress(botpressService: BotpressService) {
  return () => {
    botpressService.initialize();
  };
}

// This provides an alternative to NgModules for initialization
export const BOTPRESS_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: initializeBotpress,
    deps: [BotpressService],
    multi: true,
  },
];
