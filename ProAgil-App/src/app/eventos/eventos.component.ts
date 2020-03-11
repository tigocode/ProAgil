import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any;


  constructor(private Http: HttpClient) { }

  ngOnInit() {
   this.getEventos();
  }

  getEventos() {
    this.Http.get('http://localhost:5000/api/values').subscribe(response => {
      this.eventos = response;
    }, Error => {
      console.log(Error);
    },

    );
  }
}
