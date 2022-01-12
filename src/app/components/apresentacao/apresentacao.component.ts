import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.scss']
})
export class ApresentacaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  certificacoes = [
    { arquivo: 'offensive_security_oscp', nome: 'Offensive Security OSCP' },
    { arquivo: 'aws_certified_security_specialty', nome: 'AWS Certified Security Specialty' },
    { arquivo: 'aws_solutions_architect_professional', nome: 'AWS Solutions Architect Professional' },
    { arquivo: 'offensive_security_oswe', nome: 'Offensive Security OSWE' }
  ];

  props: any = { 'width': '100px' };
}