import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient) { }

  private readonly Token: string = "5d025fc3c1827369a4a3e0795cd85043";

  getAPI(): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${this.Token}`)


  }
}
