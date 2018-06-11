import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apod } from '../model/apod';
import { Observable } from 'rxjs';

const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const MARS_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';
const API_KEY = '2CDWTqZZGArIpaDKanEEWNNMQ2LWHWJ24ZG7raDs';
@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  //Injeccion de dependencias: http client
  constructor(private httpClient: HttpClient) { }

  getApod(): Observable<Apod>{
    //return this.httpClient.get<Apod>(APOD_URL + '?api_key=' + API_KEY);
    //template Literals
    return this.httpClient.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`);
  }
  //servicio para obtener todos los registros de los mars 
  /*getMarsImages(): Observable<any>{
    return this.httpClient.get<any>(`${MARS_URL}&api_key=${API_KEY}`);
  }*/
  //servicio para obtener todos los registros de los mars pero discriminar por camaras
  getMarsImages(camera: string): Observable<any>{
    return this.httpClient.get<any>(`${MARS_URL}&camera=${camera}&api_key=${API_KEY}`);
  }
  getMarsAllImages(): Observable<any> {
    return this.httpClient.get<any>(`${MARS_URL}&api_key=${API_KEY}`);
  }
}
