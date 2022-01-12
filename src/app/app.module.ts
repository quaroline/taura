import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatoComponent } from './contato/contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WpServicosComponent } from './wp-servicos/wp-servicos.component';
import { RouterModule, Routes } from '@angular/router';
import { WpErrorComponent } from './wp-error/wp-error.component';
import { WpHomeComponent } from './wp-home/wp-home.component';

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
