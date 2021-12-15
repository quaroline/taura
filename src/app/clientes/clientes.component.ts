import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  clientes = [
    { nome: 'FIAP', arquivo: 'fiap.png' },
    { nome: 'Flipkick Cloud Experts', arquivo: 'flipkick.png' },
    { nome: 'Tumim7', arquivo: 'tumim7.png' },
    { nome: 'DOCK', arquivo: 'dock.png' },
    { nome: 'HGV Sistemas', arquivo: 'hgv.png' }
  ];

  props: any = { 'width': '150px', 'padding-right': '3rem', 'margin-bottom': '1rem' };

  ngOnInit(): void {}

}
