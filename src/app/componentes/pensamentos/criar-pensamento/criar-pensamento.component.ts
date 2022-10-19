//Bibliotecas
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//Classes TS
import { Pensamento } from './../pensamento';
import { PensamentoService } from '../pensamento.service';
import { minusculoValidator } from './minusculoValidator';

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

    //#region Primeira forma de criar um formulário reativo

    this.formulario = this.formBuilder.group({
      conteudo: ['',
                  Validators.compose([
                    Validators.required,
                    Validators.pattern(/(.|\s)*\S(.|\s)*/)
                  ])
                ],
      autoria:  ['',
                  Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    minusculoValidator
                ])],
      modelo:   ['modelo1'],

      //#endregion

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

      console.log(this.formulario)

      if(this.formulario.valid){
        this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      });

    }
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
  }

  habilitarBotao() : string {
    if (this.formulario.valid) {
      return 'botao'
    } else {
      return 'botao_desabilitado'
    }
  }

}
