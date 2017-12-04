import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogsListComponent implements OnInit {
  logs$;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch({ type: 'LOAD_DATA' });
    this.logs$ = this.store.select('app', 'eventLogs');
  }
}
