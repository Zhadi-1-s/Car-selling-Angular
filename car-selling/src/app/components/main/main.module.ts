import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { MainComponent } from "./presentation/main.component";
import { LogoEntityService } from "./state/logo-entity.service";

@NgModule({
    declarations:[
        MainComponent
    ],
    imports:[
        CommonModule
    ],
    providers:[
        LogoEntityService
    ]
})
export class MainModule{
    
}