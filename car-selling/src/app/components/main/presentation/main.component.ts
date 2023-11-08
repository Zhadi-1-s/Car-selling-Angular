import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  constructor(){
    
  }

  array = [
    {"name":"John"},{"name":"Alex"}
  ]

  ngOnInit(): void {
      localStorage.setItem('name',JSON.stringify(this.array));
      console.log(this.array)
      console.log('passed data to local Storage')
  }

}
