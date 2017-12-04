import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.scss']
})
export class LogsListComponent implements OnInit, OnDestroy {
  logs;
  subscription;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch({ type: 'LOAD_DATA' });
    this.subscription = this.store.select('app', 'eventLogs').subscribe(eventLogs => {
      this.logs = eventLogs;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
