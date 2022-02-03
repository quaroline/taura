import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.scss']
})
export class ApresentacaoComponent implements AfterViewInit {

  constructor() { }

  backupElementosDeletaveis: HTMLElement[] = [];

  ngAfterViewInit(): void {
    this.backupElementosDeletaveis = [
      document.getElementById('apresentacao'),
      document.getElementById('apresentacao_vazio'),
      document.getElementById('apresentacao_textos')
    ] as HTMLElement[];

    this.alterarPropriedades();
    this.manipularMargemApresentacao();
  }

  certificacoes = [
    { arquivo: 'offensive_security_oscp', nome: 'Offensive Security OSCP' },
    { arquivo: 'aws_certified_security_specialty', nome: 'AWS Certified Security Specialty' },
    { arquivo: 'aws_solutions_architect_professional', nome: 'AWS Solutions Architect Professional' },
    { arquivo: 'offensive_security_oswe', nome: 'Offensive Security OSWE' }
  ];

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.alterarPropriedades();
    this.manipularMargemApresentacao();
  }

  manipularMargemApresentacao() {
    this.backupElementosDeletaveis[0].style.marginTop = window.innerHeight > 905 ? "-7rem" : "0";
  }

  manipularElementosEmTelaComResolucaoAlta(): void {
    this.backupElementosDeletaveis[0]?.classList.remove('container');

    this.backupElementosDeletaveis[0]?.classList.add('row');
    this.backupElementosDeletaveis[1]?.classList.add('col-md-2');
    this.backupElementosDeletaveis[2]?.classList.add('col-md-3', 'relative');

    this.backupElementosDeletaveis[2]?.children[0].classList.add('vertical-center');
  }

  manipularElementosEmTelaComResolucaoBaixa(): void {
    this.backupElementosDeletaveis[0]?.classList.add('container');
    
    this.backupElementosDeletaveis[0]?.classList.remove('row');
    this.backupElementosDeletaveis[1]?.classList.remove('col-md-2');
    this.backupElementosDeletaveis[2]?.classList.remove('col-md-3', 'relative');

    this.backupElementosDeletaveis[2]?.children[0].classList.remove('vertical-center');
  }

  alterarPropriedades(): void {
    if (window.innerWidth > 1200 && window.innerHeight > 700)
      this.manipularElementosEmTelaComResolucaoAlta();
    else
      this.manipularElementosEmTelaComResolucaoBaixa();
  }

  props: any = { 'width': '100px' };
}