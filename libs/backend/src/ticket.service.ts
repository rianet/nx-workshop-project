import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Ticket, Comment } from '@tuskdesk-suite/data-models';
import { ApiConfig } from './api-config';

@Injectable()
export class TicketService {
  private _rootUrl = '';

  constructor(@Optional() private apiConfig: ApiConfig, private http: HttpClient) {
    if (apiConfig) {
      this._rootUrl = apiConfig.rootUrl;
    }
  }

  tickets(status?: string): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this._rootUrl}/api/tickets`, { params: { status } });
  }

  searchTickets(searchTerm: string): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this._rootUrl}/api/tickets`, { params: { searchTerm } });
  }

  ticketById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this._rootUrl}/api/tickets/${id}`);
  }

  comments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this._rootUrl}/api/tickets/${id}/comments`);
  }
}
