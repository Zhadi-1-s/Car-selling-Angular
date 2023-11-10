import { Injectable } from '@angular/core';

import { Logotip } from '../models/logotip';

import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoEntityService {
  
  logotips: Logotip[] = [
    {id:1,name:'Porche'},
    {id:2,name:'BMW'},
    {id:3,name:'Mercedes'},
    {id:4,name:'Audi'},
    {id:5,name:'Maseratti'},
    {id:6,name:'Ferari'},
    {id:7,name:'Toyota'},
    {id:8,name:'Lexus'},
    {id:9,name:'Aston Martin'},
    {id:10,name:'Bugatti'}
  ]

  constructor() { }

  getLogotips():Observable<any>{
      return of(this.logotips)
  }

  

}
