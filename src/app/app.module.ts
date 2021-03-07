import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Servicios } from "../services/servicios.service";
import { ServiciosComponent } from "../services/services.component";
import { HttpClientModule } from "@angular/common/http";
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AngularFireModule } from '@angular/fire';
import {FormsModule} from '@angular/forms'
import { AngularFireAuthModule } from '@angular/fire/auth';




import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProfileComponent } from './components/profile/profile.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/firestore';
import { SevillaComponent } from './sevilla/sevilla.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CoreaComponent } from './components/corea/corea.component';
import { TronosComponent } from './components/tronos/tronos.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';





const rutas = [
  {
    path:'profile',
    component: ProfileComponent
  },


  {
    path:'menu',
    component: MenuComponent
  },

  {
    path:'sevilla',
    component: SevillaComponent
  },

  {
    path:'corea',
    component: CoreaComponent
  },

  {
    path:'tronos',
    component: TronosComponent
  },
 
 {
   path:'login',
   component:LoginComponent
 },

  { path: '**', 
  component:NotfoundComponent  }






  
]



@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    MenuComponent,
    SidenavComponent,
    ServiciosComponent,
    ProfileComponent,
    CarruselComponent,
    SevillaComponent,
    NotfoundComponent,
    CoreaComponent,
    TronosComponent,
    LoginComponent,
    RegistroComponent,
    
   
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    IvyCarouselModule,
    RouterModule.forRoot(rutas),
    NgbModule,
    MatFormFieldModule,
    FormsModule,
    MatListModule,
    AngularFireAuthModule,
    MatCardModule,
   
  ],
  providers: [Servicios],
  bootstrap: [AppComponent]
})
export class AppModule { }
