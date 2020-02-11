import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/app1' }
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
