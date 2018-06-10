import { Component, OnInit } from '@angular/core';
import { Estudiante } from './../../shared/model/estudiante';
import { ClassEstudiante } from './../../shared/model/class-estudiante';
@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: ClassEstudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  listaEstudiantes: Estudiante[];
  constructor() { }

  ngOnInit() {
    console.log('Inicializando el componente MaterialList');
    this.estudiante1 = new ClassEstudiante(1, 'Luis Jose', 'Cochabamba');
    console.log('edad estudiante 1', this.estudiante1.getEdad());
    this.estudiante2 = {
      id: 2,
      nombre: 'Maria Lozano',
      ciudad: 'Lima',
      fotoURL: 'https://devstickers.com/assets/img/pro/fu83.png'
    };
    this.estudiante3 = {
      id: 3,
      nombre: 'Jose Perez',
      ciudad: 'Bogota',
      // fotoURL: 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg'
    };
    // cambiamos el valor en 3segundos despues de inciar la app
    this.listaEstudiantes = [this.estudiante1, this.estudiante2, this.estudiante3];
    setTimeout(() => {
    this.estudiante3 = {
      id: 4,
      nombre: 'Felix Perrogon',
      ciudad: 'Montevideo',
      fotoURL: 'https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png'
    };
  }, 3000);
  }
  onMouseClick($event: Estudiante){
    console.log('click on:', $event.nombre);
  }

}
