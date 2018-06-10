import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apod } from '../model/apod';
import { Observable } from 'rxjs';

const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = '2CDWTqZZGArIpaDKanEEWNNMQ2LWHWJ24ZG7raDs';
@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  //Injeccion de dependencias: http client
  constructor(private httpClient: HttpClient) { }

  getApod(): Observable<Apod>{
    //return this.DATA;
    return this.httpClient.get<Apod>(APOD_URL + '?api_key=' + API_KEY);
  }
}
