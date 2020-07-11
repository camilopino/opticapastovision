import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var M:any;

@Component({
  selector: 'app-acetato-dama',
  templateUrl: './acetato-dama.component.html',
  styleUrls: ['./acetato-dama.component.css']
})
export class AcetatoDamaComponent implements OnInit {

  arreglo
  constructor() { }

  ngOnInit() { 
    this.arreglo=JSON.parse(localStorage.getItem("ACD"))
    this.emision()
  }


  emision(){
    $.getJSON("../../../marcos.json",(res)=>{    
      localStorage.setItem("ACD",JSON.stringify(res[5]))
    })
    
  }



  aparecer_recuadro(imagen_principal,imagenSecundaria,imagenTerciaria){
    
    $("#modal").show(300)
      $("#ventanaED a:first-child").find("img").attr("src",imagen_principal)
      $("#ventanaED  a:nth-child(2)").find("img").attr("src",imagenSecundaria)
      $("#ventanaED  a:nth-child(3)").find("img").attr("src",imagenTerciaria)

    var elem = document.querySelector('#ventanaED');
    var instance = M.Carousel.init(elem,{
      indicators:true,
      fullWidth:true,
      pressed:true
    });  
}

ocultar_modal(){
$("#modal").hide()
}

}
