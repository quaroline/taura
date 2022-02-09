# _Web-site_ Taura

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

## Execução

- Ambiente DEV PT-BR: `ng serve` (`http://localhost:4200/`).
- Ambiente DEV EN: `ng serve --configuration=en`
- _Build_ artefatos: `ng build` (diretório: `dist/`).

Para adicionar novos textos internacionalizados, a decoração `i18n` deve ser adicionada no elemento HTML em questão ou, se for o caso de traduzir uma _string_ em código, colocar esta entre "\`" e antes, `localize`, como segue modelo: `$localize'Arquitetura'`.

Deve-se então rodar o `ng extract-i18n` para extrair os novos textos, copia-los do arquivo gerado e coloca-los em `./locale/messages.en.xlf`, com suas traduções dentro da _tag_ `target` (abaixo de `source`).
