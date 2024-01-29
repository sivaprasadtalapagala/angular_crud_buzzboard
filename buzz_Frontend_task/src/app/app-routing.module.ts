import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPracticeComponent } from './test-practice/test-practice.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {path:"",component:UserFormComponent},
  {path:"test",component:TestPracticeComponent},
  {path:"user",component:UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
