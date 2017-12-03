import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './+state/app.interfaces';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select(s => s.app.loggedInUserId)
      .pipe(take(1))
      .subscribe(id => {
        this.store.dispatch({ type: 'LOAD_LOGGED_IN_USER', payload: id });
      });
  }
}
