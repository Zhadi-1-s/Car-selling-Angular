import { Injectable } from '@angular/core';

import { Logotip } from '../models/logotip';

import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoEntityService {
  
  logotips: Logotip[] = [
    {id:1,name:'Porche',svg:'someSvg'},
    {id:2,name:'BMW',svg:'some-svg'},
    {id:3,name:'Mercedes',svg:'some-svg'}
  ]

  constructor() { }

  getLogotips():Observable<any>{
      return of(this.logotips)
  }
}
