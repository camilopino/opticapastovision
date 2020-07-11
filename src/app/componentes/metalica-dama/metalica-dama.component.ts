import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var M:any;

@Component({
  selector: 'app-metalica-dama',
  templateUrl: './metalica-dama.component.html',
  styleUrls: ['./metalica-dama.component.css']
})
export class MetalicaDamaComponent implements OnInit {
  arreglo 
  

  constructor() { }

  ngOnInit() { 
    this.arreglo=JSON.parse(localStorage.getItem("MMD"))
    this.emision()

  }


  emision(){
    $.getJSON("../../../marcos.json",(res)=>{    
      localStorage.setItem("MMD",JSON.stringify(res[4]))
    })
    
  }

  aparecer_recuadro(imagen_principal,imagenSecundaria,imagenTerciaria){
    
    $("#modal").show(300)
      $("#ventanaED a:first-child").find("img").attr("src",imagen_principal)
      $("#ventanaED  a:nth-child(2)").find("img").attr("src",imagenSecundaria)
      $("#ventanaED  a:nth-child(3)").find("img").attr("src",imagenTerciaria)

    var elem = document.querySelector('#ventanaED');
    var instance = M.Carousel.init(elem,{
      indicators:true
    });  
}

ocultar_modal(){
$("#modal").hide()
}
  
}


