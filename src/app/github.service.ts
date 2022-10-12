import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Github {
  name: string;
  avatar_url: string;
  following: string;
  followers: string;
  public_gists: string;
  public_repos: string;
  html_url: string;
  login: string;
  location: string;
  blog: string;
  created_at: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private username: string;
  private client_id = 'd01a4bfea23b112c0643';
  private client_secret = 'f3cf86c00aa24ff2103f108fb9da0fa6adc45b17';
  constructor(private http: HttpClient) {
    this.username = 'Mustafoski';
  }

  getUser(): Observable<any> {
    return this.http
      .get<Github>(
        'https://api.github.com/users/' +
          this.username +
          '?client_id=' +
          this.client_id +
          '&client_secret=' +
          this.client_secret
      )
      .pipe(map((res:any) => res));
  }
  getRepos(): Observable<any> {
    return this.http
      .get(
        'https://api.github.com/users/' +
          this.username +
          '/repos?client_id=' +
          this.client_id +
          '&client_secret=' +
          this.client_secret
      )
      .pipe(map((res:any) => {
        return res;
      }));
  }

  updateUser(username: string) {
    return (this.username = username);
  }
}
