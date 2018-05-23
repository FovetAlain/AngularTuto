import { GithubFollowerService } from './../services/github-follower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-follower',
  templateUrl: './github-follower.component.html',
  styleUrls: ['./github-follower.component.css']
})
export class GithubFollowerComponent implements OnInit {

  followers: any[];

  constructor(private service: GithubFollowerService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(
      followers => {
        this.followers = followers;
      }
    );
  }

}
