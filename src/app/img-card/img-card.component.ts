import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  public src: string;

  public button: Button = {
    text: "Give me a cat please",
    disabled: false
  }


generateSrc(): void {
  this.src = this.image.api + this.image.message +
                 '?size=' + this.image.fontsize +
                 '&ts=' + Date.now();
}
  constructor() { }

  ngOnInit() {
      this.src = this.image.api + this.image.message;
      console.log(navigator.onLine);
      if (!navigator.onLine) {
          this.button.text = 'Offline';
          this.button.disabled = false;
          console.log("disabling button");
      }
  }

}

class CatImage {
  message: string;
  api: string;
  fontsize: number;
}

class Button {
  text: string;
  disabled: boolean;
}
