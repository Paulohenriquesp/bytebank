import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';


@Component({
  selector: 'app-nova-transferncia',
  templateUrl: './nova-transferncia.component.html',
  styleUrls: ['./nova-transferncia.component.scss']
})
export class NovaTransfernciaComponent implements OnInit {
  
  @Output() aoTransferir = new EventEmitter();

  public valor!: number;
  public destino!: number;
  
  constructor(private service: TransferenciaService, private router: Router) { }
  
  ngOnInit(): void {
  }
  

  transferir(){
    console.log('solicitada nova transferência');
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino}
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log('Chegou aqui',resultado)
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    (error) => console.error(error)
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
