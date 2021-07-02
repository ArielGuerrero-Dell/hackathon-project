import { Injectable } from '@angular/core';

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {

  recognition = new webkitSpeechRecognition();

  public text = '';

  constructor() { }

  init() {
    this.recognition.lang = 'en-US';
  }

  start() {
    this.recognition.start();

    console.log("Speech recognition started");

    this.recognition.onresult = function (event: any) {
      this.text = event.results[0][0].transcript;
      console.log(this.text);
    }
  }

  getText() {
    return this.text;
  }
}