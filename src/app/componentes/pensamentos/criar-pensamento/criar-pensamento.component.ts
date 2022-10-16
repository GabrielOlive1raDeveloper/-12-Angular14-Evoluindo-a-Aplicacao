//Bibliotecas
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
//Classes TS
import { Pensamento } from './../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {

    //Primeira forma de criar um formulário reativo
    this.formulario = this.formBuilder.group({
      conteudo: ["Formulário reativo"],
      autoria: ["Angular"],
      modelo: ["modelo1"]
    })

    /*Outra forma de criar um formulário reativo

        this.formulario = new FormGroup({
          conteudo: new FormControl(''),
          autoria: new FormControl(''),
          modelo: new FormControl('')
        })

    */

  }

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    });
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
  }

}
