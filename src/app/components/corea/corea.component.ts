import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-corea',
  templateUrl: './corea.component.html',
  styleUrls: ['./corea.component.css']
})
export class CoreaComponent implements OnInit {
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
