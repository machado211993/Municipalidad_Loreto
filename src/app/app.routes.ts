import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TramitesComponent } from './pages/tramites/tramites.component';
import { AutoridadesComponent } from './pages/autoridades/autoridades.component';
import { VideoComponent } from './components/video/video.component';
import { NovedadComponent } from './pages/novedad/novedad.component';
import { ProximoEventoComponent } from './pages/proximo-evento/proximo-evento.component';
import { InformacionComponent } from './pages/informacion/informacion.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'novedad', component: NovedadComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'autoridades', component: AutoridadesComponent },
    { path: 'tramites', component: TramitesComponent },
    { path: 'proximoevento', component: ProximoEventoComponent },
    { path: 'informacion', component: InformacionComponent },
    { path: '**', redirectTo: '' }
];