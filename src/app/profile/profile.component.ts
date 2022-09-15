import { Component, OnInit } from '@angular/core';
import { GithubService, Github } from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user?: Github | any;
  repos!: any[];
  username: string = '';
  constructor(private _githubService: GithubService) {}

  ngOnInit(): void {
    this.user = false;
  }

  searchUser() {
    this._githubService.updateUser(this.username);
    this._githubService.getUser().subscribe((user) => {

      this.user = user;
    });

    this._githubService.getRepos().subscribe((repos) => {
      this.repos = repos;
    });
  }
}
