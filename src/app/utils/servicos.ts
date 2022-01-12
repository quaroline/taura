export abstract class Servicos {         
    public static servicos: any[] = [
        {
          titulo: $localize`Treinamentos`,
          icone: 'far fa-address-card',
          descricao: $localize`Preparação de profissionais nos pilares de segurança em AWS, boas práticas de segurança em CI/CD e desenvolvimento seguro`,
          descricao_completa: $localize`Preparação de profissionais nos pilares:`,
          itens: $localize`- Segurança em AWS
              - Boas práticas de segurança em CI/CD
              - Desenvolvimento seguro`
        },
        { 
          titulo: 'DevSecOps', 
          icone: 'fas fa-shield-alt',
          width: '20rem',
          descricao: $localize`Implementação de segurança e apoio em melhorias em ambientes com modelos de desenvolvimento e entrega continua (CI/CD - Devops)`,
          descricao_completa: $localize`Implementação de segurança e apoio em melhorias em ambientes com modelos de desenvolvimento e entrega continua (CI/CD - Devops), atuando com foco em:`,
          itens: $localize`- Estruturação de segurança em esteiras de desenvolvimento (CI/CD) 
              - Análise de segurança em novos projetos e assessment de segurança em arquiteturas
              - Criação de estrutura de resposta à incidentes automatizadas em recursos AWS`
        },
        {
          titulo: 'Offensive Security',
          icone: 'fas fa-user-secret',
          descricao: $localize`Identificação de riscos e vulnerabilidades em produtos e serviços, através de testes de intrusão (pentest)`,
          descricao_completa: $localize`Identificação de riscos e vulnerabilidades em produtos e serviços, através de testes de intrusão (pentest), e também apoio no acompanhamento e e correção de vulnerabilidades encontradas através de gestão de vulnerabilidades`
        }
    ];
}