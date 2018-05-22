import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() isLiked: boolean;
  @Input() nbLike: number;
  constructor() { }

  onClick() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.nbLike++;
    } else {
      this.nbLike--;
    }
  }

  ngOnInit() {
  }

}
