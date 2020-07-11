import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.aparicion_items()
    },100)
   
  }

  aparicion_items(){
    let scroll= $(document).scrollTop()
    console.log(scroll)
    if(scroll<200){
      $("#servicio1").animate({
        left:"0"
      },1500)
      $("#acompañamiento1").animate({
        right:"0"
      },1500)
    }

    if( scroll>=200){
      $("#servicio2").animate({
        right:"0"
      },1500)
      $("#acompañamiento2").animate({
        left:"0"
      },1500)

    }
    if(scroll>=500){
      $("#servicio3").animate({
        left:"0"
      },1500)
      $("#acompañamiento3").animate({
        right:"0"
      },1500)
    }

    if( scroll>=900){
      $("#servicio4").animate({
        right:"0"
      },1500)
      $("#acompañamiento4").animate({
        left:"0"
      },1500)

    }

  }
}
