import { Component, OnInit } from '@angular/core';
import { ModalserviceService } from '../../modalservice.service'
declare var $:any;
declare var M:any;

@Component({
  selector: 'app-acetato-hombre',
  templateUrl: './acetato-hombre.component.html',
  styleUrls: ['./acetato-hombre.component.css']
})
export class AcetatoHombreComponent implements OnInit {


  constructor(private modalservice:ModalserviceService) { }
 arreglo
  ngOnInit() { 
    this.arreglo=JSON.parse(localStorage.getItem("ACH"))
    this.emision()

  }


  emision(){
    $.getJSON("../../../marcos.json",(res)=>{    
      localStorage.setItem("ACH",JSON.stringify(res[2]))
    })
    
  }

  
  abrir(imagen1, imagen2, imagen3){
    this.modalservice.aparicionModal(imagen1,imagen2,imagen3)
  }


}
