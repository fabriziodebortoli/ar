import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArService } from './core/services/ar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit{
  
  constructor(private arService: ArService){

  }

  ngOnInit(){

  }

  ngOnDestroy(){
    this.arService.dispose();
  }
}
