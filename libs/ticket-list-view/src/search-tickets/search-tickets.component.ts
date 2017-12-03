import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { TicketService } from '@tuskdesk-suite/backend';
import { Subscription } from 'rxjs/Subscription';

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
  searchResults: SearchResult[];
  clickSubscription: Subscription;

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this._wireUpSearchButtonEnable();
    this._wireUpSearchButton();
  }

  ngOnDestroy(): void {
    this.clickSubscription.unsubscribe();
  }

  private _wireUpSearchButtonEnable() {}

  private _wireUpSearchButton() {
    this.clickSubscription = Observable.fromEvent(this.searchButton.nativeElement, 'click').subscribe(e => {});
  }
}

interface SearchResult {
  id: number;
  message: string;
  status: string;
}
