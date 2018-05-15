import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutCartComponent } from './components/checkout-cart/checkout-cart.component';
import { EditComponent } from './components/edit/edit.component';
import {BackOfficeComponent} from './components/backoffice/backoffice.component';

const routes: Routes = [
  { path: '', redirectTo: '/card', pathMatch: 'full' },
  { path: 'card', component: CardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'checkout-cart', component: CheckoutCartComponent },
  { path: 'edit', component: EditComponent },
  { path: 'backoffice', component: BackOfficeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
