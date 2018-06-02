import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cols=[];
  
  constructor(public afAuth: AngularFireAuth,private router:Router) {
    this.afAuth.authState.subscribe(data=>{
      this.router.navigateByUrl('/home');
    })

    
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(data=>{
     this.router.navigateByUrl('/home');
     console.log(data);
     if (typeof(Storage) !== "undefined") {
        localStorage.setItem('userName',data.user.displayName);
        localStorage.setItem('userImage',data.user.photoURL);
    } else {
      // Sorry! No Web Storage support..
    }
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
