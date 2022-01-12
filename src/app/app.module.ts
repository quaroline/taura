import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WpServicosComponent } from './pages/wp-servicos/wp-servicos.component';
import { RouterModule, Routes } from '@angular/router';
import { WpErrorComponent } from './pages/wp-error/wp-error.component';
import { WpHomeComponent } from './pages/wp-home/wp-home.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

const routes: Routes = [
  { path: '', component: WpHomeComponent },
  { path: 'services', component: WpServicosComponent },
  { path: '**', component: WpErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ApresentacaoComponent,
    ClientesComponent,
    ServicosComponent,
    ContatoComponent,
    WpServicosComponent,
    WpHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    IvyCarouselModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
