import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  template: `
  <input [(ngModel)]="name" #ctrl="ngModel" required>

  <p>Value: {{ name }}</p>
  <p>Valid: {{ ctrl.valid }}</p>

  <button (click)="setValue()">Set value</button>
`,
})




export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) {}
  
  ngOnInit(): void {
  } 
 
}
