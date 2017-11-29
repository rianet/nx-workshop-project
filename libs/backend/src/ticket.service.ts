import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Ticket, Comment } from '@tuskdesk-suite/data-models';

@Injectable()
export class TicketService {
  constructor(private http: HttpClient) {}

  tickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('/api/tickets');
  }

  ticketById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`/api/tickets/${id}`);
  }

  comments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`/api/tickets/${id}/comments`);
  }
}
