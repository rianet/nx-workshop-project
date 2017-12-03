import { Ticket } from '@tuskdesk-suite/data-models';

export interface LoadTickets {
  type: 'LOAD_TICKETS';
  payload: { status: string };
}

export interface TicketsLoaded {
  type: 'TICKETS_LOADED';
  payload: Ticket[];
}

export interface LoadTicket {
  type: 'LOAD_TICKET';
  payload: number;
}

export interface TicketLoaded {
  type: 'TICKET_LOADED';
  payload: Ticket;
}

export interface UpdateTicketMessage {
  type: 'UPDATE_TICKET_MESSAGE';
  payload: { id: number; message: string; originalMessage: string };
}

export interface UndoUpdateTicketMessage {
  type: 'UNDO_UPDATE_TICKET_MESSAGE';
  payload: { id: number; message: string };
}

export type TicketsStateModelAction =
  | LoadTickets
  | TicketsLoaded
  | LoadTicket
  | TicketLoaded
  | UpdateTicketMessage
  | UndoUpdateTicketMessage;
