import { EventLog } from '@tuskdesk-suite/data-models';

export interface App {
  eventLogs: EventLog[];
}

export interface AppState {
  readonly app: App;
}
