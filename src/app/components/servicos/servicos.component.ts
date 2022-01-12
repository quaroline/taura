import { Component, OnInit } from '@angular/core';
import { Servicos } from 'src/app/utils/servicos';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  constructor() { }

  servicos = Servicos.servicos;

  ngOnInit(): void {}
}