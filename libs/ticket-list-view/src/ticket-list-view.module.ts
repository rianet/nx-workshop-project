import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterEffects } from './+state/router.effects';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: TicketListComponent
      },
      {
        path: 'ticket/:id',
        component: TicketDetailsComponent
      }
    ]),
    EffectsModule.forRoot([RouterEffects]),
    StoreRouterConnectingModule
  ],
  declarations: [TicketListComponent, TicketDetailsComponent]
})
export class TicketListViewModule {}
