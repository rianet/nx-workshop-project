import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import 'rxjs/add/operator/switchMap';
import { AppState } from './app.interfaces';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LogService } from '@tuskdesk-suite/logs-backend';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppEffects {
  @Effect()
  loadData = this.actions.ofType('LOAD_DATA').pipe(
    mergeMap(action =>
      this.logService.logs().pipe(
        map(logs => {
          return {
            type: 'DATA_LOADED',
            payload: logs
          };
        }),
        catchError(() => Observable.of(null))
      )
    )
  );

  constructor(private actions: Actions, private logService: LogService, private d: DataPersistence<AppState>) {}
}
