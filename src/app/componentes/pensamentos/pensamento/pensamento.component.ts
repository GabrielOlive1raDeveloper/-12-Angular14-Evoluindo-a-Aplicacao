import { ListarPensamentoComponent } from './../listar-pensamento/listar-pensamento.component';
import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {

    id: 0,
    conteudo: "Estou trabalhando com o Angular",
    autoria: 'João da Silva',
    modelo: 'modelo1'

  }

  constructor() { }

  ngOnInit(): void {

  }

  larguraPensamento(): string {

    if (this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'

  }

}
