import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-glyphicon',
  templateUrl: './glyphicon.component.html',
  styleUrls: ['./glyphicon.component.css']
})
export class GlyphiconComponent implements OnInit {
  @Input() isFavorite: boolean;
  @Output() change = new EventEmitter();
  constructor() { }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }

  ngOnInit() {
  }

}
