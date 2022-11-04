import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
images = ['1.JPG', '2.JPG', '3.JPG'];
 headlines = ['Bring engineering to the next level', 'Born to code', 'Graduated at TUM'];
 currentImage = 0;
 showImage = true;

 ngOnInit(){
 this.updateImage()
 }

 updateImage(){

  setInterval(() => {
    this.currentImage++;
    this.currentImage = this.currentImage % this.images.length;
    console.log(this.currentImage)
    this.showImage =false;

    setTimeout(() => {
      this.showImage=true;
    }, 100);
  },8000);
}
}
