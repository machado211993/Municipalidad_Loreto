import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TramitesComponent } from './pages/tramites/tramites.component';
import { AutoridadesComponent } from './pages/autoridades/autoridades.component';
import { VideoComponent } from './components/video/video.component';
import { EventoProximoComponent } from './pages/evento-proximo/evento-proximo.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'novedades', component: NovedadesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'autoridades', component: AutoridadesComponent },
    { path: 'tramites', component: TramitesComponent },
    { path: 'eventoproximo', component: EventoProximoComponent },
    { path: '**', redirectTo: '' }
];