import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  usuario = {
    nombre: 'Andree'
  };

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.usuario.nombre = 'Jhassir Andree';
    }, 3000);
  }
  onKeyUp($event) {
    console.log('El keyup es:', $event);
  }
  onBlur($event: FocusEvent) {
    console.log('on blur', $event);
  }

}
