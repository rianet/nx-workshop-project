import { Ticket } from '@tuskdesk-suite/data-models';

export interface TicketsStateModel {
  tickets: { [key: string]: Ticket };
  ticketsOrder: number[];
}

export interface TicketsStateModelState {
  readonly ticketsStateModel: TicketsStateModel;
}
