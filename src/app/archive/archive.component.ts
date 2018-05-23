import { ArchiveService } from './../services/archive.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  archives: any[];
  constructor(private service: ArchiveService) { }

  ngOnInit() {
    this.archives = this.service.getArchives();
  }

}
