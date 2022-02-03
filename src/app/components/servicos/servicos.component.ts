import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Servicos } from 'src/app/utils/servicos';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements AfterViewInit {

  constructor() { }

  servicos = Servicos.servicos;

  ngAfterViewInit(): void {
    this.atribuirValorDeMaiorDivParaAsDemais();

    this.setResponsiveConfigs();
  }

  screenHeight: number = 0;
  screenWidth: number = 0;

  cellsToShow: number = 3;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setResponsiveConfigs();
  }

  setResponsiveConfigs(): void {
    this.screenWidth = window.innerWidth;
    
    if (this.screenWidth <= 800)
      this.cellsToShow = 1;

    else if (this.screenWidth <= 1000)
      this.cellsToShow = 2;

    else if (this.screenWidth > 1000)
      this.cellsToShow = 3;
  }

  atribuirValorDeMaiorDivParaAsDemais(): void {
    let cards = Array.prototype.slice.call(document.getElementsByClassName('product-card'));

    let alturaMaiorElemento = cards.reduce((a,b) => Math.max(a, b.clientHeight), 0);

    this.servicos.forEach((servico) => {
      const elemento = document.getElementById(servico.id);

      if (elemento) {
        elemento.style.height = `${alturaMaiorElemento}px`;

        const elementoPai = document.getElementsByClassName('.carousel-cells')[0] as HTMLElement;

        if (elementoPai) {
          elementoPai.style.height = `${alturaMaiorElemento}px`;
        }
      }
    });
  }
}