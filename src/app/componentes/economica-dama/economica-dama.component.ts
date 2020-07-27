import { Component, OnInit } from '@angular/core';
import { ModalserviceService } from '../../modalservice.service'
declare var $:any;
declare var M:any;

@Component({
  selector: 'app-economica-dama',
  templateUrl: './economica-dama.component.html',
  styleUrls: ['./economica-dama.component.css']
})
export class EconomicaDamaComponent implements OnInit {

  constructor(private modalservice:ModalserviceService) { }
 arreglo
  ngOnInit() { 
    this.arreglo=JSON.parse(localStorage.getItem("ECD"))
    this.emision()

  }


  emision(){
    $.getJSON("../../../marcos.json",(res)=>{    
      localStorage.setItem("ECD",JSON.stringify(res[6]))
    })
    
  }
  abrir(imagen1, imagen2, imagen3){
    this.modalservice.aparicionModal(imagen1,imagen2,imagen3)
  }
}
