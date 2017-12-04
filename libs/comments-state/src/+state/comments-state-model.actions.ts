import { Comment } from '@tuskdesk-suite/data-models';

export interface LoadTicketComments {
  type: 'LOAD_TICKET_COMMENTS';
  payload: number;
}

export interface TicketCommentsLoaded {
  type: 'TICKET_COMMENTS_LOADED';
  payload: Comment[];
}

export interface AddTicketComment {
  type: 'ADD_TICKET_COMMENT';
  payload: { id: number; message: string };
}

export interface TicketCommentAdded {
  type: 'TICKET_COMMENT_ADDED';
  payload: Comment;
}

export type CommentsStateModelAction =
  | LoadTicketComments
  | TicketCommentsLoaded
  | AddTicketComment
  | TicketCommentAdded;
