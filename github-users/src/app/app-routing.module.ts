import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';
import { DetailComponent } from './components/detail/detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ListOfUsersComponent
  },
  {
    path: ':user',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
