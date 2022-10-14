import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListuserComponent } from './components/listuser/listuser.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';

const routes: Routes = [
  {path:'',redirectTo:'user',pathMatch:'full'},
  {path:'getUsers',component:ListuserComponent},
  {path:'addUser',component:RegisteruserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
