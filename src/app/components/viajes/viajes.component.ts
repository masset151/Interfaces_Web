import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Viajes} from 'src/app/viajes.model';


@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})

export class ViajesService implements OnInit {

  constructor(private firestore: AngularFirestore) { }

  getViajes() {
    return this.firestore.collection('viajes').snapshotChanges();
}

createViaje(viajes: Viajes){
  return this.firestore.collection('viajes').add(viajes);
}

updateViaje(viaje: Viajes){
  delete viaje.id;
  this.firestore.doc('viajes/' + viaje.id).update(viaje);
}

deleteViaje(viaje: number){
  this.firestore.doc('viajes/' + viaje).delete();
}

  ngOnInit(): void {
    
  }

}
