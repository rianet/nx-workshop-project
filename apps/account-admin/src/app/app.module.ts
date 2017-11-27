import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { Route, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { BackendModule } from '@tuskdesk-suite/backend';

const routes: Route[] = [
  { path: '', component: CompaniesComponent },
  { path: 'company/:id', component: CompanyDetailsComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    BackendModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  declarations: [AppComponent, CompaniesComponent, CompanyDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
