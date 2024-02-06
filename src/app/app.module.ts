import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { AppRoutingModule } from './app.routes';
import { ProdutoDashboardComponent } from './demos/arquitetura-componentes/produto-dashboard/produto-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './pipes/filmes/filmes.component';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    AdminDashboardComponent,
    FilmesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AuthGuard,
    CadastroGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
