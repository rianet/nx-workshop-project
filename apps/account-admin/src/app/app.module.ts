import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { Route, RouterModule } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { BackendModule, BackendUserIdService, LoggedInUserInterceptor } from '@tuskdesk-suite/backend';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggedInUserIdService } from './logged-in-user-id.service';

@NgModule({
  imports: [
    BrowserModule,
    BackendModule.forRoot(),
    NxModule.forRoot(),
    RouterModule.forRoot(
      [{ path: '', component: CompaniesComponent }, { path: 'company/:id', component: CompanyDetailsComponent }],
      { initialNavigation: 'enabled' }
    )
  ],
  declarations: [AppComponent, CompaniesComponent, CompanyDetailsComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: BackendUserIdService,
      useClass: LoggedInUserIdService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggedInUserInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
