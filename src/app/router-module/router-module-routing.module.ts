import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ListComponent } from '../components/list/list.component';
import { ListInfoComponent } from '../components/list-info/list-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/list' , pathMatch: 'full'},
  { path: 'home', component: HomeComponent, children: [
    {path: 'list', component: ListComponent},
    {path: 'info/:listId', component: ListInfoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterModuleRoutingModule { }
