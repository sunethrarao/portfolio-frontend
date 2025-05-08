import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare global {
  interface Window {
    botpressWebChat?: {
      sendEvent: (event: { type: string }) => void;
    };
  }
}

@Injectable({
  providedIn: 'root',
})
export class BotpressService {
  private document = inject(DOCUMENT);
  private isInitialized = false;
  private botpressLoaded = false;

  initialize(): void {
    if (this.isInitialized) {
      return;
    }

    this.initializeBotpressWebchat();
    this.isInitialized = true;
  }

  private initializeBotpressWebchat(): void {
    // Don't use a script tag with src attribute - use direct injection instead
    const script = this.document.createElement('script');
    script.textContent = `
      (function() {
        window.botpressWebChat = window.botpressWebChat || {};
        
        // Load the webchat script directly
        const s = document.createElement('script');
        s.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
        s.async = true;
        document.body.appendChild(s);

        // Initialize webchat after a short delay to ensure script is loaded
        s.onload = function() {
          console.log("BotPress script loaded successfully");
          setTimeout(() => {
            window.botpressWebChat.init({
              "botId": "e941e17f-a9fb-4101-887e-80761bdcafde",
              "clientId": "1b816468-fd15-4f12-9e18-0c9df1d17b62",
              "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
              "messagingUrl": "https://messaging.botpress.cloud",
              "hideWidget": false,
              "stylesheet": 'https://cdn.botpress.cloud/webchat/v1/standard.css',
              "botConversationDescription": "Chat Bot for contacting support",
              "botName": "ChatWithMe",
              "useSessionStorage": true,
              "enableConversationDeletion": true,
              "showPoweredBy": false,
              "disableAnimations": false,
              "stylesheet": "https://cdn.botpress.cloud/webchat/v1/standard.css",
              "enableTranscriptDownload": false,
              "className": "webchatIframe",
              "containerWidth": "100%25",
              "layoutWidth": "100%25",
              "composerPlaceholder": "Chat with me...",
              "avatarUrl": "",
              "website": "",
              "phoneNumber": "",
              "termsConditions": "",
              "privacyPolicy": "",
              "emailAddress": "sunethrarao@gmail.com",
              "foregroundColor": "#ffffff",
              "backgroundColor": "#d6409f",
              "keepHistory": true,
              "showCloseButton": true,
              "disableUrlLoading": true,
              "exposeStore": true,
              disableAnalytics: true

            });
            console.log("BotPress webchat initialized");
          }, 1000);
        };

        s.onerror = function() {
          console.error("Failed to load BotPress script");
        };
      })();
    `;

    // Remove any existing BotPress scripts
    const existingScripts = this.document.querySelectorAll(
      'script[src*="botpress"]'
    );
    existingScripts.forEach((s) => s.parentNode?.removeChild(s));

    // Append new script
    this.document.body.appendChild(script);
  }

  showChat(): void {
    try {
      if (window.botpressWebChat) {
        window.botpressWebChat.sendEvent({ type: 'show' });
        console.log('Show chat event sent');
      } else {
        console.warn('BotPress WebChat not initialized');
      }
    } catch (error) {
      console.error('Error showing chat:', error);
    }
  }

  hideChat(): void {
    try {
      if (window.botpressWebChat) {
        window.botpressWebChat.sendEvent({ type: 'hide' });
        console.log('Hide chat event sent');
      } else {
        console.warn('BotPress WebChat not initialized');
      }
    } catch (error) {
      console.error('Error hiding chat:', error);
    }
  }

  toggleChat(): void {
    try {
      if (window.botpressWebChat) {
        window.botpressWebChat.sendEvent({ type: 'toggle' });
        console.log('Toggle chat event sent');
      } else {
        console.warn('BotPress WebChat not initialized');
      }
    } catch (error) {
      console.error('Error toggling chat:', error);
    }
  }
}
