import { Component, OnInit } from '@angular/core';
import { Apod } from './../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apod: Apod;
  error: string;
  constructor(private nasaApi: NasaApiService) {
  }

  ngOnInit() {
    this.nasaApi.getApod()
      .subscribe((data: Apod) => {
      //setTime para retrasar respuesta 1500ms
        // setTimeout(() => {
          this.apod = data;
        //  }, 1500);
      }, error => {
        setTimeout(() => {
          console.log('Error al conectar al servidor');
          this.error = 'Error al conectar al servidor';
        }, 2000);
      });
  }
}
