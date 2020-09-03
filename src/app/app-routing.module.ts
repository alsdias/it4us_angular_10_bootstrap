import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SteponeModule } from './stepone/stepone.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
