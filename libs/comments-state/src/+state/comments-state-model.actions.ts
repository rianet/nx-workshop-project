import { Comment } from '@tuskdesk-suite/data-models';

export interface LoadTicketComments {
  type: 'LOAD_TICKET_COMMENTS';
  payload: number;
}

export interface TicketCommentsLoaded {
  type: 'TICKET_COMMENTS_LOADED';
  payload: Comment[];
}

export type CommentsStateModelAction = LoadTicketComments | TicketCommentsLoaded;
