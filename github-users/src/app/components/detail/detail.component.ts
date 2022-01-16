import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/services/request/request.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public userSelected : any = ""
  public reposUserSelected: any = []
  public followersUserSelected: any = []
  public errorServer : any = false

  constructor
  (
    private _route: ActivatedRoute,
    private _request: RequestService,
    private _router: Router
  ){ }

  ngOnInit(): void {
    let queryParams = this._route.snapshot.params
    this._request.getUsers().subscribe((response: any) => {
      this.userSelected = response.filter((elem: any) => (elem.login === queryParams?.['user']))
      this._request.getRepos(this.userSelected[0].repos_url).subscribe((response: any) =>
      {
        this.reposUserSelected = response.splice(0,5)
      },
      error => {
        this.errorServer = true
      })
      this._request.getFollowers(this.userSelected[0].followers_url).subscribe((response: any) =>
      {
        this.followersUserSelected = response.splice(0,5)
      },
      error => {
        this.errorServer = true
      })
    })
  }
  public goBack(){
    this._router.navigate(['/'])
  }
}
