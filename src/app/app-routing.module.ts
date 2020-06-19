import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', component: HistoryComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
