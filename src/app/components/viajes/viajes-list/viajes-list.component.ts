import { Component, OnInit } from '@angular/core';
import { ViajesService } from 'src/app/components/viajes/viajes.component';
import { Viajes } from 'src/app/viajes.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.css']
})
export class ViajesListComponent implements OnInit {

  viajes: Viajes[];
  constructor(private viajesService: ViajesService) { }

  ngOnInit() {
    this.viajesService.getViajes().subscribe(data => {
      this.viajes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Viajes 
        };
        } 
      )
    });
  }

  create(viaje: Viajes){
      this.viajesService.createViaje(viaje);
  }

  update(viaje: Viajes) {
    this.viajesService.updateViaje(viaje);
  }

  delete(id: number) {
    this.viajesService.deleteViaje(id);
  }

}
