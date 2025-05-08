import {
  Component,
  ElementRef,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { BotpressService } from '../../../../shared/services/botpress.service';

@Component({
  selector: 'app-chatbot',
  imports: [],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ChatbotComponent {
  private botpressService = inject(BotpressService);

  ngOnInit(): void {
    // Initialize with a delay to ensure the DOM is fully loaded
    setTimeout(() => {
      this.botpressService.initialize();
      console.log('BotPress service initialized');
    }, 500);
  }

  toggleChat(): void {
    console.log('Toggle chat button clicked');
    this.botpressService.toggleChat();
  }
}
