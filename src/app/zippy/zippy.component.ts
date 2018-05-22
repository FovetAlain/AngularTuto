import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input() title: string;
  isActive: boolean;

  onActivation() {
    this.isActive = !this.isActive;
  }
}
