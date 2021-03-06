import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estudiante } from './../../../shared/model/estudiante';
@Component({
  selector: 'app-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {
  readonly DEFAULT_PICTURE = 'https://gazettereview.com/wp-content/uploads/2016/03/facebook-avatar.jpg';
  @Input()
  estudiante: Estudiante;

  @Output()
  onMouseClick = new EventEmitter<Estudiante>()

  constructor() { }

  ngOnInit() {
  }

  onClick(e: Estudiante){
    this.onMouseClick.emit(e);
  }


}
