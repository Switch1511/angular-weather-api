import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private httpClient: HttpClient) { }

  private TokenAPI: string = "5d025fc3c1827369a4a3e0795cd85043";

  getAPI(){
    this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${this.TokenAPI}`)
      .subscribe(data => {
        console.log(data)
        return data
      })
  }
}
