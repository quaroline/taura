import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  constructor() { }

  servicos: any[] = [
    {
      titulo: $localize`Treinamentos`,
      icone: 'far fa-address-card',
      descricao: $localize`Preparação de profissionais nos pilares de segurança em AWS, boas práticas de segurança em CI/CD e desenvolvimento seguro`
    },
    { 
      titulo: 'DevSecOps', 
      icone: 'fas fa-shield-alt',
      width: '20rem',
      descricao: $localize`Implementação de segurança e apoio em melhorias em ambientes com modelos de desenvolvimento e entrega continua (CI/CD - Devops)`
    },
    {
      titulo: 'Offensive Security',
      icone: 'fas fa-user-secret',
      descricao: $localize`Identificação de riscos e vulnerabilidades em produtos e serviços, através de testes de intrusão (pentest)`
    }
  ];

  ngOnInit(): void {
  }
}
