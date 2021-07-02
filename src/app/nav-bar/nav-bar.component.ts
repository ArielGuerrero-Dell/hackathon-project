import { Component, OnInit } from '@angular/core';
import { VoiceRecognitionService } from '../voice-recognition.service'

declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [VoiceRecognitionService]
})
export class NavBarComponent implements OnInit {

  recognition = new webkitSpeechRecognition();

  public text = '';

  constructor() { }

  ngOnInit(): void {
  }

  startService() {
    this.recognition.start();

    console.log("Speech recognition started");

    this.recognition.onresult = function (event: any) {
      this.text = event.results[0][0].transcript;
      console.log(this.text);
    }
  }


}
