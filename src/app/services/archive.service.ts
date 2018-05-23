import { Injectable } from '@angular/core';

@Injectable()
export class ArchiveService {
  archives: any[];

  constructor() {
    this.archives = [
      {year: '2017', month: '1'},
      {year: '2017', month: '2'},
      {year: '2017', month: '3'}
    ];
  }

  getArchives() {
    return this.archives;
  }

}
