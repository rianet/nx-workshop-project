import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogService } from '@tuskdesk-suite/logs-backend';

@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.scss']
})
export class LogsListComponent implements OnInit, OnDestroy {
  logs;
  subscription;
  constructor(private logsService: LogService) {}

  ngOnInit() {
    this.subscription = this.logsService.logs().subscribe(logs => {
      this.logs = logs;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
