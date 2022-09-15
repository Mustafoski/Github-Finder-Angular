import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private _githubService:GithubService){}
  ngOnInit(){

  }

}
