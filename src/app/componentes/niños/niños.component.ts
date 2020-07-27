import { Component, OnInit } from '@angular/core';
import { ModalserviceService } from '../../modalservice.service'
declare var $:any;
declare var M:any;
@Component({
  selector: 'app-niños',
  templateUrl: './niños.component.html',
  styleUrls: ['./niños.component.css']
})
export class NiñosComponent implements OnInit {

  constructor(private modalservice:ModalserviceService) { }
  arreglo
   ngOnInit() { 
     this.arreglo=JSON.parse(localStorage.getItem("MN"))
     this.emision()
 
   }

   emision(){
     $.getJSON("../../../marcos.json",(res)=>{    
       localStorage.setItem("MN",JSON.stringify(res[7]))
     })
     
   }

   abrir(imagen1, imagen2, imagen3){
     this.modalservice.aparicionModal(imagen1,imagen2,imagen3)
   }
 
}
