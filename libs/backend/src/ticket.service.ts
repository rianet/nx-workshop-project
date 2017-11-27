import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Ticket } from './ticket.interface';

@Injectable()
export class TicketService {
  _tickets$: Observable<Ticket[]>;

  constructor() {
    this._tickets$ = Observable.of(this._tickets);
  }

  tickets(): Observable<Ticket[]> {
    return this._tickets$;
  }

  _tickets = [
    { id: 't1', title: '', summary: '', status: 'open', companyId: 'c1', userId: 'c1u1' },
    { id: 't2', title: '', summary: '', status: 'completed', companyId: 'c2', userId: 'c1u1' },
    { id: 't3', title: '', summary: '', status: 'open', companyId: 'c2', userId: 'c1u1' },
    { id: 't4', title: '', summary: '', status: 'open', companyId: 'c3', userId: 'c1u1' },
    { id: 't5', title: '', summary: '', status: 'completed', companyId: 'c4', userId: 'c1u1' },
    { id: 't6', title: '', summary: '', status: 'completed', companyId: 'c4', userId: 'c1u1' }
  ];
}
