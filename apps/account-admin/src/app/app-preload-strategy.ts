import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export class AppPreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data.preloadOn
      ? load()
      : Observable.of(null);
  }
}
