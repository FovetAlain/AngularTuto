import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-archive-detail',
  templateUrl: './archive-detail.component.html',
  styleUrls: ['./archive-detail.component.css']
})
export class ArchiveDetailComponent implements OnInit {

  archive: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.archive = { year: params.get('year'), month: params.get('month')};
      }
    );
  }

  onClick() {
    this.router.navigate(['']);
  }

}
