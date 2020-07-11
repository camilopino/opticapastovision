import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var M:any

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   $(".menu").hover(function(){
    $(this).find(".submenu").slideDown(100)
    })
    $(".menu").mouseleave(function(){
    $(this).find(".submenu").slideUp(100)
  })

  $(".menu-small").click(function(){
    $(this).find(".submenu").slideToggle()
    })
   

  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  }

}
