export abstract class Servicos {         
    public static servicos: any[] = [
        {
          id: 'arquitetura',
          titulo: $localize`Arquitetura`,
          icone: 'far fa-address-card',
          descricao: $localize`Preparação de profissionais nos pilares de segurança em AWS, boas práticas de segurança em CI/CD e desenvolvimento seguro`,
          descricao_completa: $localize`Preparação de profissionais nos pilares:`,
          itens: [ $localize`Segurança em AWS`,
            $localize`Boas práticas de segurança em CI/CD`,
            $localize`Desenvolvimento seguro`]
        },
        { 
          id: 'devops',
          titulo: 'DevOps', 
          icone: 'fas fa-shield-alt',
          width: '20rem',
          descricao: $localize`Implementação de segurança e apoio em melhorias em ambientes com modelos de desenvolvimento e entrega continua (CI/CD - Devops)`,
          descricao_completa: $localize`Implementação de segurança e apoio em melhorias em ambientes com modelos de desenvolvimento e entrega continua (CI/CD - Devops), atuando com foco em:`,
          itens: [ $localize`Estruturação de segurança em esteiras de desenvolvimento (CI/CD)`,
            $localize`Análise de segurança em novos projetos e assessment de segurança em arquiteturas`,
            $localize`Criação de estrutura de resposta à incidentes automatizadas em recursos AWS` ]
        },
        {
          id: 'seguranca',
          titulo: 'Segurança',
          icone: 'fas fa-user-secret',
          descricao: $localize`Identificação de riscos e vulnerabilidades em produtos e serviços, através de testes de intrusão (pentest)`,
          descricao_completa: $localize`Identificação de riscos e vulnerabilidades em produtos e serviços, através de testes de intrusão (pentest), e também apoio no acompanhamento e correção de vulnerabilidades encontradas através de gestão de vulnerabilidades`
        }
    ];
}