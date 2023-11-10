import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { MainComponent } from "./presentation/main.component";
import { LogoEntityService } from "./state/logo-entity.service";

import {MatButtonModule} from '@angular/material/button'


@NgModule({
    declarations:[
        MainComponent
    ],
    imports:[
        CommonModule,
        MatButtonModule
    ],
    providers:[
        LogoEntityService
    ]
})
export class MainModule{
    
}