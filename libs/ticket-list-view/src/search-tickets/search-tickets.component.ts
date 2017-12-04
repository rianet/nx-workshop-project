import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { TicketService } from '@tuskdesk-suite/backend';
import { Subscription } from 'rxjs/Subscription';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.scss']
})
export class SearchTicketsComponent implements OnInit, OnDestroy {
  searchText = new FormControl();
  @ViewChild('searchButton', { read: ElementRef })
  searchButton;
  searchButtonDisabled = true;
  searchResults$: Observable<SearchResult[]>;
  searchTextSubscription: Subscription;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this._wireUpSearchButtonEnable();
    this._wireUpSearchButton();
  }

  ngOnDestroy(): void {
    this.searchTextSubscription.unsubscribe();
  }

  private _wireUpSearchButtonEnable() {
    this.searchTextSubscription = this.searchText.valueChanges.subscribe(value => {
      this.searchButtonDisabled = value.length < 2;
    });
  }

  private _wireUpSearchButton() {
    this.searchResults$ = Observable.fromEvent(this.searchButton.nativeElement, 'click').pipe(
      switchMap(event => this.ticketService.searchTickets(this.searchText.value)),
      map(tickets => {
        return tickets.map(ticket => {
          return { id: ticket.id, message: ticket.message, status: ticket.status };
        });
      })
    );
  }
}

interface SearchResult {
  id: number;
  message: string;
  status: string;
}
