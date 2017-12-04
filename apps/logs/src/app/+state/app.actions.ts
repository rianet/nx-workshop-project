import { EventLog } from '@tuskdesk-suite/data-models';

export interface LoadData {
  type: 'LOAD_DATA';
  payload: {};
}

export interface DataLoaded {
  type: 'DATA_LOADED';
  payload: EventLog[];
}

export type AppAction = LoadData | DataLoaded;
