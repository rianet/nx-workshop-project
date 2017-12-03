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
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { UserFullNameService } from './user-full-name.service';
import { environment } from '../environments/environment';
import { AppPreloadStrategy } from './app-preload-strategy';

@NgModule({
  imports: [
    BrowserModule,
    BackendModule.forRoot(environment.apiRootUrl),
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: '', component: CompaniesComponent },
        { path: 'company/:id', component: CompanyDetailsComponent },
        {
          path: 'forms',
          loadChildren: './company-forms/company-forms.module#CompanyFormsModule',
          data: {preloadOn: true}
        }
      ],
      {
        initialNavigation: 'enabled',
        preloadingStrategy: AppPreloadStrategy
      }
    )
  ],
  declarations: [AppComponent, CompaniesComponent, CompanyDetailsComponent, WelcomeUserComponent],
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
    },
    UserFullNameService,
    AppPreloadStrategy
  ]
})
export class AppModule {}
