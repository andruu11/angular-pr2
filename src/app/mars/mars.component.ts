import { Component, OnInit } from '@angular/core';
import { MarsImage } from '../shared/model/mars-image';
import { NasaApiService } from '../shared/services/nasa-api.service';
@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {

  marsImages: MarsImage[];
  //Inyeccion de Dependencias
  constructor(private servicio: NasaApiService) { }
  cameras: string[] = ['TODAS', 'MAST', 'CHEMCAM', 'NAVCAM'];
  currentCamera: string;
  ngOnInit() {
    this.currentCamera = this.cameras[0];
    this.AllView();
    
  }

  onSelectCamera(camera: string) {
    if(camera != 'TODAS'){
      this.refreshView(camera);
      //console.log(camera);
    }else{
      this.AllView();
      //console.log(camera);
    }
    
  }

  private refreshView(camera: string){
      this.servicio.getMarsImages(camera)
      .subscribe(result => {
        this.marsImages = result.photos;
      });
  }
  private AllView() {
    this.servicio.getMarsAllImages()
      .subscribe(result => {
        this.marsImages = result.photos;
      });
  }
  

}
