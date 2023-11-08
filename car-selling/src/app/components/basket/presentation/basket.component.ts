import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  
  constructor(){}
  

  ngOnInit(): void {
      const result = localStorage.getItem('name')
      
      const parsedArray = JSON.stringify(result)

      console.log(parsedArray)

  }
}
