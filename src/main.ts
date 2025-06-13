import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './app/components/header/header.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';

@Component({
  selector: 'app-root', // Aca inicia la aplicacion //que llama el index html
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent],
  template: `
    <div class="d-flex flex-column min-vh-100">
      <app-header></app-header>

      <main class="flex-grow-1 container my-4">
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
      /* Asegura que la página ocupe toda la altura de la pantalla */
      html,
      body {
        height: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
      }

      /* Contenedor principal que ocupa el espacio restante */
      .content-wrapper {
        flex: 1;
        padding-bottom: 80px; /* Agregamos un poco de espacio abajo del contenido */
      }

      /* Footer en la parte inferior */
      app-footer {
        margin-top: 40px; /* Separación entre el contenido y el footer */
        margin-bottom: 20px; /* Opcional: espaciado adicional para separar el footer de la base */
      }
    `,
  ],
})
export class App {
  constructor() {}
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))],
}).catch((err) => console.error(err));
