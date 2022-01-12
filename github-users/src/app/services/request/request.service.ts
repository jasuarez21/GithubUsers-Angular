import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private URL_API: string = `${environment.URL_API}`

  constructor(private http: HttpClient) { }

  public getUsers(){
    return this.http.get(this.URL_API)
  }
}
