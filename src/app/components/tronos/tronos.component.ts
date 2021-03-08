import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 
@Component({
  selector: 'app-tronos',
  templateUrl: './tronos.component.html',
  styleUrls: ['./tronos.component.css']
})
export class TronosComponent implements OnInit {

  name:String;
  constructor(config: NgbCarouselConfig) {  
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
  }  
  
  
  
  ngOnInit() {  
  } 

}
