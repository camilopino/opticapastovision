import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var M:any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  aparecer_recuadro(imagen_principal,imagenSecundaria,imagenTerciaria){
    
    $("#modal").show(300)
      $("#ventana a:first-child").find("img").attr("src",imagen_principal)
      $("#ventana  a:nth-child(2)").find("img").attr("src",imagenSecundaria)
      $("#ventana  a:nth-child(3)").find("img").attr("src",imagenTerciaria)

    var elem = document.querySelector('#ventana');
    var instance = M.Carousel.init(elem);  
}

ocultar_modal(){
$("#modal").hide()
}

}
