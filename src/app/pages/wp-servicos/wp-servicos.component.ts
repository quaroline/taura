import { Component, OnInit } from '@angular/core';
import { Servicos } from 'src/app/utils/servicos';

@Component({
  selector: 'app-wp-servicos',
  templateUrl: './wp-servicos.component.html',
  styleUrls: ['./wp-servicos.component.scss']
})
export class WpServicosComponent implements OnInit {

  constructor() { }

  servicos = Servicos.servicos;

  ngOnInit(): void {}

}
