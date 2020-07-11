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

  ngOnInit() {
    this.inicializadorCarousel()
  }


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
