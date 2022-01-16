import { FormControl } from '@angular/forms';
import { RequestService } from './../../services/request/request.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {

  public userSearched: string | any = new FormControl('');
  public searchedUsersInInput: any = []
  public waiting : boolean = true
  public errorServer: boolean = false

  constructor(private _request: RequestService) { }

  ngOnInit(): void {
  }

  setNameInUrl(){
    this._request.getUsers().subscribe((response: any) => {
      this.waiting = false
      this.searchedUsersInInput = response.filter((elem: any) => elem.login.includes(this.userSearched.value))
    },
    error => {
      this.errorServer = true
    }
    )
  }
}
