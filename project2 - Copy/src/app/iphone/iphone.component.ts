import { Component } from '@angular/core';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.css']
})
export class IphoneComponent {
  selectedImage: string = 'all'; 

  selectImage(imageName: string) {
    this.selectedImage = imageName + ".jpg"; 
  }
}
