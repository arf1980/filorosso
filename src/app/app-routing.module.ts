import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IniziativeComponent } from './components/iniziative/iniziative.component';
import { SpecialeComponent } from './components/speciale/speciale.component';
import { MediaComponent } from './components/media/media.component';
import { ContattiComponent } from './components/contatti/contatti.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'iniziative', component: IniziativeComponent },
  { path: 'speciale', component: SpecialeComponent },
  { path: 'media', component: MediaComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
