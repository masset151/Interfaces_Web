import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-sevilla',
  templateUrl: './sevilla.component.html',
  styleUrls: ['./sevilla.component.css']
})
export class SevillaComponent implements OnInit {
name:String;
constructor(config: NgbCarouselConfig) {  
  config.interval = 2000;  
  config.wrap = true;  
  config.keyboard = false;  
  config.pauseOnHover = false;  
}  

sevilla(){
  window.open("sevilla.component.html")
}

ngOnInit() {  
}  

}
