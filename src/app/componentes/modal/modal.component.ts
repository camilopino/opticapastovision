import { Component, OnInit } from '@angular/core';
import {  ModalserviceService } from '../../modalservice.service';
declare var $:any;
declare var M:any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalservice:ModalserviceService) { }

  ngOnInit() {

  }

  cerrar(){
    this.modalservice.cerraModal()
  }
 
}




