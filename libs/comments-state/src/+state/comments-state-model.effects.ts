import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import 'rxjs/add/operator/switchMap';
import { CommentsStateModelState } from './comments-state-model.interfaces';
import { LoadTicketComments } from './comments-state-model.actions';
import { TicketService } from '@tuskdesk-suite/backend';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentsStateModelEffects {
  @Effect()
  loadData = this.actions.ofType('LOAD_TICKET_COMMENTS').pipe(
    mergeMap((action: LoadTicketComments) =>
      this.ticketService.comments(action.payload).pipe(
        map(comments => {
          return {
            type: 'TICKET_COMMENTS_LOADED',
            payload: comments
          };
        }),
        catchError(() => Observable.of(null))
      )
    )
  );

  constructor(
    private actions: Actions,
    private ticketService: TicketService,
    private d: DataPersistence<CommentsStateModelState>
  ) {}
}
