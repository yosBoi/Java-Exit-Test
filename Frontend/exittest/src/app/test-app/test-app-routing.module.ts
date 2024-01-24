import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GuardyGuard } from './guard/guardy.guard';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'search',
    canActivate:[GuardyGuard],
    component: SearchComponent
  },
  {
    path: 'result',
    canActivate:[GuardyGuard],
    component: ResultComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestAppRoutingModule { }
