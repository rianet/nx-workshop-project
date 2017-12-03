import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { LogsBackendModule } from '@tuskdesk-suite/logs-backend';

@NgModule({
  imports: [
    BrowserModule,
    LogsBackendModule,
    NxModule.forRoot(),
    RouterModule.forRoot([{ path: '', loadChildren: '@tuskdesk-suite/logs-view#LogsViewModule' }], {
      initialNavigation: 'enabled'
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
