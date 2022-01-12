import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fg = new FormGroup({
    email: new FormControl(null),
    nome: new FormControl(null),
    mensagem: new FormControl(null)
  });

  enviarEmail(): void {
    let assunto = encodeURIComponent('Contato pelo Site');

    let mensagem = encodeURIComponent(`Remetente ${this.fg.controls['email'].value} (${this.fg.controls['nome'].value}) enviou pelo site em ${new Date()}:
    
      ${this.fg.controls['mensagem'].value}`);

    let uri = `mailto:contato@taurasec.com?cc=joao.assis@taurasec.com&subject=${assunto}&body=${mensagem}`;

    window.location.href = uri;
  }
}
