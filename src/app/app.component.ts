import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 images = ['1.JPG', '2.JPG', '3.JPG'];
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
