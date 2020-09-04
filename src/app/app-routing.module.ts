import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SteptwoModule } from './steptwo/steptwo.module';

import { HomeComponent } from './home/home.component';
import { SteptwoComponent } from './steptwo/steptwo/steptwo.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'steptwo', component: SteptwoComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SteptwoModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
