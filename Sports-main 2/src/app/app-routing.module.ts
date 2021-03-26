import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DirectComponent } from './direct/direct.component';
const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'direct', component: DirectComponent                                    },
  { path: 'about', component: AboutComponent },
  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
