import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var M:any;

@Component({
  selector: 'app-acetato-hombre',
  templateUrl: './acetato-hombre.component.html',
  styleUrls: ['./acetato-hombre.component.css']
})
export class AcetatoHombreComponent implements OnInit {


  constructor() { }
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
