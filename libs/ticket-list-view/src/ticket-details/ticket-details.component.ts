import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Comment, Ticket } from '@tuskdesk-suite/data-models';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketDetailsComponent implements OnInit {
  ticket$: Observable<Ticket>;
  comments$: Observable<Comment>;
  ticketMessage = new FormControl();
  ticketComment = new FormControl();
  messageReadMode = true;
  originalMessage: string;

  constructor(private store: Store<any>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.ticket$ = this.route.params.pipe(
      switchMap(params =>
        this.store.select(s => s.ticketsStateModel.tickets).pipe(map(tickets => tickets[+params['id']]))
      )
    );

    this.route.params.subscribe(params => {
      this.store.dispatch({ type: 'LOAD_TICKET', payload: +params['id'] });
      this.store.dispatch({ type: 'LOAD_TICKET_COMMENTS', payload: +params['id'] });
    });

    this.comments$ = this.store.select('commentsStateModel', 'comments');
  }

  switchToEdit(originalMessage: string) {
    this.messageReadMode = false;
    this.originalMessage = originalMessage;
  }

  cancelEdit() {
    this.messageReadMode = true;
  }

  saveEdit(id: number) {
    this.store.dispatch({
      type: 'UPDATE_TICKET_MESSAGE',
      payload: { id, message: this.ticketMessage.value, originalMessage: this.originalMessage }
    });
    this.messageReadMode = true;
  }

  addComment(id: number) {
    this.store.dispatch({
      type: 'ADD_TICKET_COMMENT',
      payload: { id, message: this.ticketComment.value }
    });
    this.ticketComment.patchValue('');
  }
}
