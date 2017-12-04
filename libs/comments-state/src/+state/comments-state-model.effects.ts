import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import 'rxjs/add/operator/switchMap';
import { CommentsStateModelState } from './comments-state-model.interfaces';
import { AddTicketComment, LoadTicketComments } from './comments-state-model.actions';
import { TicketService } from '@tuskdesk-suite/backend';
import { map } from 'rxjs/operators';

@Injectable()
export class CommentsStateModelEffects {
  @Effect()
  loadData = this.d.fetch('LOAD_TICKET_COMMENTS', {
    id: (action: LoadTicketComments) => action.payload,
    run: (action: LoadTicketComments) => {
      return this.ticketService.comments(action.payload).pipe(
        map(comments => {
          return {
            type: 'TICKET_COMMENTS_LOADED',
            payload: comments
          };
        })
      );
    },
    onError: () => {}
  });

  @Effect()
  addComment = this.d.pessimisticUpdate('ADD_TICKET_COMMENT', {
    run: (action: AddTicketComment) => {
      return this.ticketService.addComment(action.payload.id, action.payload.message).pipe(
        map(comment => {
          return {
            type: 'TICKET_COMMENT_ADDED',
            payload: comment
          };
        })
      );
    },
    onError: () => null
  });

  constructor(
    private actions: Actions,
    private ticketService: TicketService,
    private d: DataPersistence<CommentsStateModelState>
  ) {}
}
