import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BackendModule } from '@tuskdesk-suite/backend';

const routes: Route[] = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [BrowserModule, BackendModule, NxModule.forRoot(), RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  declarations: [AppComponent, DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
