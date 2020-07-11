import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var M:any;
@Component({
  selector: 'app-niños',
  templateUrl: './niños.component.html',
  styleUrls: ['./niños.component.css']
})
export class NiñosComponent implements OnInit {

  constructor() { }
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
