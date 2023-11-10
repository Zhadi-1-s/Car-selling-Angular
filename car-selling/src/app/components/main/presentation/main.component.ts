import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LogoEntityService } from '../state/logo-entity.service';
import { Logotip } from '../models/logotip';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  logotips!:Logotip|any|null

  constructor(private logoService:LogoEntityService){
    
  }

  ngOnInit(): void {
    this.logoService.getLogotips().subscribe(
      data => {
        this.logotips = data;
        console.log('data taked succesfully')
        console.log(data)
      }
    )
  }

}
