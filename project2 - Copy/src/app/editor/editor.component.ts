import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {

  isBold: boolean = false;
  isItalic: boolean = false;
  isUnderline: boolean = false;
  isTT: boolean = false;

  toggleB() {
    this.isBold = !this.isBold;
  }

  toggleI() {
    this.isItalic = !this.isItalic;
  }

  toggleU(){
    this.isUnderline = !this.isUnderline;
  }

  toggleTT() {
    this.isTT = !this.isTT;
  }

  
}
