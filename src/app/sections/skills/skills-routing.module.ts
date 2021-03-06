import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './containers/skills.component';


const APP_ROUTES: Routes = [
  { path: '', component: SkillsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
