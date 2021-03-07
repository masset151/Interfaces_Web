import { Component, OnInit } from "@angular/core";
import { Servicios } from "../services/servicios.service";

@Component({
  selector: "app-messages",
  templateUrl: "./servicios.component.html",
  styleUrls: ["./servicios.component.css"]
})
export class ServiciosComponent implements OnInit {
  movies:Array<any> = [];
 
  constructor(public servicios: Servicios) {
      
  }

  ngOnInit() {
     this.servicios.getMovies().subscribe(data => {
        
          

          
       for(let i=0;i<5000;i++){
        this.movies.push(data.results[i].name); 
        console.log(this.movies)
       }
      
        
        
      });
  }
   
}