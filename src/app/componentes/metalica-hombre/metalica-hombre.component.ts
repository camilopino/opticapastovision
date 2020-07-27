import { Component, OnInit } from '@angular/core';
import { ModalserviceService } from '../../modalservice.service'
declare var $:any;
declare var M:any;
@Component({
  selector: 'app-metalica-hombre',
  templateUrl: './metalica-hombre.component.html',
  styleUrls: ['./metalica-hombre.component.css']
})
export class MetalicaHombreComponent implements OnInit {

  constructor(private modalservice:ModalserviceService) { }
  arreglo
   ngOnInit() { 
     this.arreglo=JSON.parse(localStorage.getItem("MMH"))
     this.emision() 
   }

   emision(){
     $.getJSON("../../../marcos.json",(res)=>{    
       localStorage.setItem("MMH",JSON.stringify(res[3]))
     })
    
   }
   abrir(imagen1, imagen2, imagen3){
    this.modalservice.aparicionModal(imagen1,imagen2,imagen3)
  }
 

}
