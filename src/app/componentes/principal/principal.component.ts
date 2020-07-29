import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var M:any;

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  

  constructor() { }
  i=0;
  ngOnInit() {
    this.cambioImagen()
  }

  cambioImagen(){
    var i=this.i
    var imagen1="../../imagenes/imagenes-banner/imagen1.jpg"
    var imagen2="../../imagenes/imagenes-banner/imagen2.jpg"
    var imagen3="../../imagenes/imagenes-banner/imagen3.jpg"
    var imagen4= "../../imagenes/imagenes-banner/imagen4.jpg"
    var imagen
      setInterval(function(){
        if(i<3){
          i++
          console.log(i)
          if(i==1){
            imagen=$(".imagen").find("img").attr("src",imagen2)
            console.log(imagen2)
          }
          if(i==2){
             imagen=$(".imagen").find("img").attr("src",imagen3)
            console.log(imagen3)
          }
          if(i==3){
             imagen=$(".imagen").find("img").attr("src",imagen4)
            console.log(imagen4)
          }
        }
        else{
          i=0
          console.log(i)
           imagen=$(".imagen").find("img").attr("src",imagen1)
            console.log(imagen1)
        }
      },8000) 

    $(".derecha").on("click",function(){
      if(i<3){
        i++
        console.log(i)
        if(i==1){
          imagen=$(".imagen").find("img").attr("src",imagen2)
          console.log(imagen2)
        }
        if(i==2){
           imagen=$(".imagen").find("img").attr("src",imagen3)
          console.log(imagen3)
        }
        if(i==3){
           imagen=$(".imagen").find("img").attr("src",imagen4)
          console.log(imagen4)
        }
      }
      else{
        i=0
        console.log(i)
         imagen=$(".imagen").find("img").attr("src",imagen1)
          console.log(imagen1)
      }
    })



    $(".izquierda").on("click",function(){
      if(i>0){
        i--
        console.log(i)
        if(i==0){
          imagen=$(".imagen").find("img").attr("src",imagen1)
          console.log(imagen1)
        }
        if(i==1){
          imagen=$(".imagen").find("img").attr("src",imagen2)
          console.log(imagen2)
        }
        if(i==2){
           imagen=$(".imagen").find("img").attr("src",imagen3)
          console.log(imagen3)
        }
      }
      else{
        i=3
        imagen=$(".imagen").find("img").attr("src",imagen4)
        console.log(imagen4)
        console.log(i)
        
      }
    })
  }


  }


