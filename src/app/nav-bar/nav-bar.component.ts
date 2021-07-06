import { Component, OnInit } from '@angular/core';

declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  text = '';

  recognition = new webkitSpeechRecognition();

  constructor() { }

  ngOnInit(): void {
    this.recognition.lang = 'en-US';
  }

  start() {
    this.recognition.start();
    console.log("Speech recognition started");
    this.recognition.onresult = function (event: any) {
      this.text = event.results[0][0].transcript;

      var output = (<HTMLInputElement>document.getElementById('q'));
      if (output) {
        output.value = this.text;
        document.forms[0].submit();
        console.log(this.text);
      }
    }
  }

}
