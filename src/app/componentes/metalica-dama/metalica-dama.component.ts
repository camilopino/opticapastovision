import { Component, OnInit } from '@angular/core';
import { ModalserviceService } from '../../modalservice.service'
declare var $:any;
declare var M:any;

@Component({
  selector: 'app-metalica-dama',
  templateUrl: './metalica-dama.component.html',
  styleUrls: ['./metalica-dama.component.css']
})
export class MetalicaDamaComponent implements OnInit {
  arreglo 
  

  constructor(private modalservice:ModalserviceService) { }

  ngOnInit() { 
    this.arreglo=JSON.parse(localStorage.getItem("MMD"))
    this.emision()

  }


  emision(){
    $.getJSON("../../../marcos.json",(res)=>{    
      localStorage.setItem("MMD",JSON.stringify(res[4]))
    })
    
  }
  abrir(imagen1, imagen2, imagen3){
    this.modalservice.aparicionModal(imagen1,imagen2,imagen3)
  }
  
}


