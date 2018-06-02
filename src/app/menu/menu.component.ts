import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToNews(){
    this.router.navigateByUrl('/home/newsHome');
  }

  goToWeather(){
    this.router.navigateByUrl('/home/weather');
  }

  goToLinks(){
    this.router.navigateByUrl('/home/links');
  }

  goToTranslate(){
    this.router.navigateByUrl('/home/translate');
  }
}
