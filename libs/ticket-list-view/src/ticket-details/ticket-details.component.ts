import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TicketsStateModelState } from '@tuskdesk-suite/tickets-state';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Ticket } from '@tuskdesk-suite/data-models';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketDetailsComponent implements OnInit {
  ticket$: Observable<Ticket>;

  constructor(private store: Store<TicketsStateModelState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.ticket$ = this.route.params.pipe(
      switchMap(params =>
        this.store
          .select(s => s.ticketsStateModel.tickets)
          .pipe(map(tickets => tickets.find(ticket => ticket.id === +params['id'])))
      )
    );
  }
}
