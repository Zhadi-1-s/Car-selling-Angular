import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/presentation/main.component';
import { BasketComponent } from './components/basket/presentation/basket.component';

const routes: Routes = [
  {path:'main',component:MainComponent},
  
  {path:'',redirectTo:'main',pathMatch:'full'},

  {path:'basket',component:BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
