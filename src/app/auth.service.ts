import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ServiciosComponent } from "../services/services.component";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email = '';
  contrase = '';
  authUser = null;

  constructor(public auth: AngularFireAuth, private router: Router) { }

  user = this.auth.authState.pipe(map(authState => {
    //console.log('authState: ', authState);
    if (authState) {
      return authState;
    } else {
      return null;
    }
  }))

  login() {
    this.auth.signInWithEmailAndPassword(this.email, this.contrase)
      .then(user => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
         
        } else if (error.code === 'auth/user-not-found') {
         
        }
      });
    }
    
    logout() {
      this.auth.signOut()
      
    }
    
    register(email: string, password: string) {
      return this.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
     
        this.router.navigate(['/']);
        console.log(result.user)
        
      }).catch((error) => {
        
      })
  }
}
