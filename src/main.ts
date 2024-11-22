import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './app/components/header/header.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';

@Component({
  selector: 'app-root', //aca inicia la aplicacion
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent],
  template: `
 <nav>
  <app-header></app-header>
</nav>
<main class="content-container">
  <router-outlet></router-outlet>
</main>
<footer>
  <app-footer></app-footer>
</footer>

    
  `
})
export class App {
  constructor() { }
}

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
}).catch(err => console.error(err));