import { Ticket, Comment } from '@tuskdesk-suite/data-models';

export interface TicketsStateModel {
  tickets: Ticket[];
  comments: Comment[];
}

export interface TicketsStateModelState {
  readonly ticketsStateModel: TicketsStateModel;
}
