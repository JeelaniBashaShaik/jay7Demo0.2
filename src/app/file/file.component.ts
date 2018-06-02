import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  progress:number=0;
  constructor(private storage: AngularFireStorage) {}
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    this.uploadPercent.subscribe(data=>{
      console.log(data)
      this.progress = Number(data.toFixed(2));
      console.log(this.progress)
    });
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe()
  }

  ngOnInit(){

  }
}


/* instructions:
1. need to install angularfire2 with "^5.0.0-rc.6",
2. import following in app.module.ts

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';


export const firebaseConfig = {
  apiKey: 'AIzaSyALKAhqoBqrt-aV75jn5L0QcnIWxopxu94',
  authDomain: 'jay7demo2.firebaseapp.com',
  databaseURL: 'https://jay7demo2.firebaseio.com',
  projectId: 'jay7demo2',
  storageBucket: 'jay7demo2.appspot.com',
  messagingSenderId: '1058322672934'
};

place this below imports and above ngmodule in app.module.ts

3. add following to imports array of app.module.ts
AngularFireModule.initializeApp(firebaseConfig),
AngularFireStorageModule,

 */

