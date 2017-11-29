import { Injectable } from '@angular/core';
import { AppState } from './+state/app.interfaces';
import { Store } from '@ngrx/store';
import { BackendUserIdService } from '@tuskdesk-suite/backend';

@Injectable()
export class LoggedInUserIdService implements BackendUserIdService {
  _userId: number;

  constructor(private store: Store<AppState>) {
    this.store.select(s => s.app.loggedInUserId).subscribe(id => {
      this._userId = id;
    });
  }

  get userId(): number {
    return this._userId;
  }
}
