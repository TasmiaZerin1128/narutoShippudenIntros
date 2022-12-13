import { DatePipe, formatDate } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  timeLine: any;
  extraLine= "";

  audio1 = new Audio();
  audio2 = new Audio();
  audio3 = new Audio();
  audio4 = new Audio();

  anyClicked = false;

  // source = "https://37.media.tumblr.com/tumblr_lljb0lJB2M1qktfddo1_r1_500.gif";
  source = "https://i.pinimg.com/originals/39/f8/78/39f8782827f373d6516d305f290d0c58.gif";
  returnSource: any;

  ngOnInit(): void {

    this.timeLine = new Date();
    this.audio1.src = "./assets/audio/introTrack.mp3";
    this.audio1.load();
    this.audio1.play();
  }
  

  printOne(){
        this.anyClicked = true;
        this.audio1.pause();
        this.source = "./assets/images/Opening6.mp4"
        console.log(this.source);
        const player = this.elRef.nativeElement.querySelector('video');
        player.load();
  }

  printTwo(){
    this.anyClicked = true;
    this.source = "./assets/images/Opening4.mp4"
    console.log(this.source);
    const player = this.elRef.nativeElement.querySelector('video');
    player.load();
    this.audio1.pause();
  }

  printThree(){
    this.anyClicked = true;
    this.source = "./assets/images/Opening3.mp4"
    console.log(this.source);
    const player = this.elRef.nativeElement.querySelector('video');
    player.load();
    this.audio1.pause();
  }

  printFour(){
    this.anyClicked = true;
    this.source = "./assets/images/Opening12.mp4"
    console.log(this.source);
    const player = this.elRef.nativeElement.querySelector('video');
    player.load();
    this.audio1.pause();
  }

}
