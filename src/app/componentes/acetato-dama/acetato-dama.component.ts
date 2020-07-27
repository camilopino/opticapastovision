import { Component, OnInit } from '@angular/core';
import { ModalserviceService } from '../../modalservice.service'
declare var $:any;
declare var M:any;

@Component({
  selector: 'app-acetato-dama',
  templateUrl: './acetato-dama.component.html',
  styleUrls: ['./acetato-dama.component.css']
})
export class AcetatoDamaComponent implements OnInit {

  arreglo
  constructor(private modalservice:ModalserviceService) { }

  ngOnInit() { 
    this.arreglo=JSON.parse(localStorage.getItem("ACD"))
    this.emision()
  }


  emision(){
    $.getJSON("../../../marcos.json",(res)=>{    
      localStorage.setItem("ACD",JSON.stringify(res[5]))
    })
    
  }

  abrir(imagen1, imagen2, imagen3){
    this.modalservice.aparicionModal(imagen1,imagen2,imagen3)
  }

}
