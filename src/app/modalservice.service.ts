import { Injectable } from '@angular/core';
declare var $:any;
@Injectable()
export class ModalserviceService {

  constructor() { }

  aparicionModal(imagen1, imagen2, imagen3){
    var imagen1=imagen1
    var imagen2=imagen2
    var imagen3=imagen3
    var i=0
    $(".recuadro-grande").show(100)
    $(".recuadro-pequeño").show(100)
    $(".recuadro-pequeño img").attr("src",imagen1)
    $(".derecha").on("click",function(){
      i++
      if(i<=2){
        if(i==1){
          $(".recuadro-pequeño img").attr("src",imagen2)
       
        }
        if(i==2){
          $(".recuadro-pequeño img").attr("src",imagen3)
        
        }
      }
      else{
        i=0
        $(".recuadro-pequeño img").attr("src",imagen1)
      
      }
    })

   $(".izquierda").on("click",function(){
      if(i>0){
        i--
     
        if(i==0){
          $(".recuadro-pequeño img").attr("src",imagen1)
          
        }
        if(i==1){
          $(".recuadro-pequeño img").attr("src",imagen2)
          
        }
      }
      else{
        i=2
        $(".recuadro-pequeño img").attr("src",imagen3)
          
      }
   }) 


    
}

cerraModal(){
    $(".recuadro-grande").hide()
    $(".recuadro-pequeño").hide()
}



}
