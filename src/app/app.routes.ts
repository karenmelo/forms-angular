import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { ProdutoDetalheComponent } from './demos/arquitetura-componentes/componentes/produto-card-detalhe.component';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';

const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  {
    path: 'cadastro',
    component: CadastroComponent,
    canDeactivate: [CadastroGuard],
  },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./demos/arquitetura-componentes/produto.module').then(
        (module) => module.ProdutoModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((module) => module.AdminModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
