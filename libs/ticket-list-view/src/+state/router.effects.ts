import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { TicketListComponent } from '../ticket-list/ticket-list.component';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';

@Injectable()
export class RouterEffects {
  @Effect()
  loadTickets = this.d.navigation(TicketListComponent, {
    run: (a: ActivatedRouteSnapshot) => {
      return {
        type: 'LOAD_TICKETS',
        payload: {status: 'open'}
      };
    },
    onError: (a: ActivatedRouteSnapshot, e: any) => {
      return null;
    }
  });

  @Effect()
  loadTicket = this.d.navigation(TicketDetailsComponent, {
    run: (a: ActivatedRouteSnapshot) => {
      return {
        type: 'LOAD_TICKET',
        payload: +a.params['id']
      };
    },
    onError: (a: ActivatedRouteSnapshot, e: any) => {
      return null;
    }
  });

  constructor(private actions: Actions, private d: DataPersistence<any>) {}
}
