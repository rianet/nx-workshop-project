import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Ticket } from './ticket.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TicketService {
  constructor(private http: HttpClient) {}

  tickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('/api/tickets');
  }
}
