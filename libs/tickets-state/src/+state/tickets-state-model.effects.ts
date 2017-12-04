import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { TicketsStateModelState } from './tickets-state-model.interfaces';
import { LoadTicket, LoadTickets, UpdateTicketMessage } from './tickets-state-model.actions';
import { TicketService } from '@tuskdesk-suite/backend';
import { map } from 'rxjs/operators';

@Injectable()
export class TicketsStateModelEffects {
  @Effect()
  loadTickets = this.d.fetch('LOAD_TICKETS', {
    run: (a: LoadTickets, state: TicketsStateModelState) => {
      return this.ticketService.getTickets(a.payload.status).pipe(
        map(tickets => {
          return {
            type: 'TICKETS_LOADED',
            payload: tickets
          };
        })
      );
    },

    onError: (a: LoadTickets, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  clearComments = this.actions.ofType('LOAD_TICKET').pipe(
    map(() => {
      return { type: 'TICKET_COMMENTS_LOADED', payload: [] };
    })
  );

  @Effect()
  loadTicket = this.d.fetch('LOAD_TICKET', {
    run: (a: LoadTicket, state: TicketsStateModelState) => {
      return this.ticketService.ticketById(a.payload).pipe(
        map(ticket => {
          return {
            type: 'TICKET_LOADED',
            payload: ticket
          };
        })
      );
    },

    onError: (a: LoadTicket, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateTicketMessage = this.d.optimisticUpdate<UpdateTicketMessage>('UPDATE_TICKET_MESSAGE', {
    run: (action: UpdateTicketMessage): any => {
      return this.ticketService.updateTicketMessage(action.payload.id, action.payload.message).pipe(
        map(() => {
          return { type: 'TICKET_MESSAGE_UPDATED' };
        })
      );
    },
    undoAction: (action: UpdateTicketMessage) => {
      return {
        type: 'UNDO_UPDATE_TICKET_MESSAGE',
        payload: { id: action.payload.id, message: action.payload.originalMessage }
      };
    }
  });

  constructor(
    private actions: Actions,
    private d: DataPersistence<TicketsStateModelState>,
    private ticketService: TicketService
  ) {}
}
