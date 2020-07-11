import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var M:any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.inicializadorCarousel()
    this.emision()


  }


  //emision de datos al localStorage
  emision(){
    $.getJSON("../../../marcos.json",(res)=>{
      localStorage.setItem("imagenes",JSON.stringify(res))
    })
    
  }


  //funcion inicializadora y automatica de carrusel
inicializadorCarousel(){
  var elem = document.querySelector('.carousel');
  var instance = M.Carousel.init(elem,{
     indicators: true,
     duration: 500,
 });
 setInterval(()=>{
   if(!instance.pressed){
     instance.next();
   }
 },5000)
}

}
