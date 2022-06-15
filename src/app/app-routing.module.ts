import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTERS_MODULE_COMPONENT } from './config/router';

@NgModule({
  imports: [RouterModule.forRoot(ROUTERS_MODULE_COMPONENT, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
