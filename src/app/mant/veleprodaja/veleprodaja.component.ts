import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veleprodaja',
  templateUrl: './veleprodaja.component.html',
  styleUrls: ['./veleprodaja.component.css']
})
export class VeleprodajaComponent implements OnInit {
  janjetina: boolean=false;
  junetina: boolean=false;
  svinjetina: boolean=false;
  patkaguska: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  changeJanjetina() {
    this.janjetina = !this.janjetina;
  }
  changeJunetina() {
    this.junetina = !this.junetina;
  }
  changeSvinjetina() {
    this.svinjetina = !this.svinjetina;
  }
  changePatkaGuska() {
    this.patkaguska = !this.patkaguska;
  }
}
