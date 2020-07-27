import { Component, OnInit } from '@angular/core';
import { ModalserviceService } from '../../modalservice.service'
declare var $:any;
declare var M:any;
@Component({
  selector: 'app-promo-hombre',
  templateUrl: './promo-hombre.component.html',
  styleUrls: ['./promo-hombre.component.css']
})
export class PromoHombreComponent implements OnInit {

  constructor(private modalservice:ModalserviceService) { }
  arreglo
   ngOnInit() { 
     this.arreglo=JSON.parse(localStorage.getItem("MPH"))
     this.emision()
 
   }

   emision(){
     $.getJSON("../../../marcos.json",(res)=>{    
       localStorage.setItem("MPH",JSON.stringify(res[1]))
     })
     
   }
   abrir(imagen1, imagen2, imagen3){
    this.modalservice.aparicionModal(imagen1,imagen2,imagen3)
  }

}
