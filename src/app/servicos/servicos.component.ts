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
      titulo: 'Treinamentos',
      icone: 'far fa-address-card',
      descricao: 'Preparação de profissionais nos pilares:',
      itens: `- Segurança em AWS
              - Boas práticas de segurança em CI/CD
              - Desenvolvimento seguro`
    },
    { 
      titulo: 'DevSecOps', 
      icone: 'fas fa-shield-alt',
      descricao: 'Implementação de segurança e apoio em melhorias em ambientes com modelos de desenvolvimento e entrega continua (CI/CD - Devops), atuando com foco em:',
      itens: `- Estruturação e implementação de segurança em esteiras de desenvolvimento (CI/CD) 
              - Análise de segurança em novos projetos e assessment de segurança em arquiteturas
              - Criação de estrutura de resposta à incidentes automatizadas em recursos AWS`
    },
    {
      titulo: 'Offensive Security',
      icone: 'fas fa-user-secret',
      descricao: `Identificação de riscos e vulnerabilidades em produtos e serviços, através de testes de intrusão (pentest), e também apoio no acompanhamento e e correção de vulnerabilidades encontradas através de gestão de vulnerabilidades`
    }
  ];

  ngOnInit(): void {
  }

}
