import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { readAll, hot, cold } from '@nrwl/nx/testing';
import { AppEffects } from './app.effects';
import { LogService } from '@tuskdesk-suite/logs-backend';

describe('AppEffects', () => {
  describe('loadData', () => {
    it('should work', async () => {
      TestBed.configureTestingModule({
        imports: [StoreModule.forRoot({})],
        providers: [
          AppEffects,
          DataPersistence,
          provideMockActions(() => actions),
          {
            provide: LogService,
            useValue: {
              logs: () => cold('-a-|', { a: [{ id: 1, message: 'test log' }] })
            }
          }
        ]
      });

      const effects = TestBed.get(AppEffects);
      const actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
      expect(await readAll(effects.loadData)).toEqual([
        {
          type: 'DATA_LOADED',
          payload: [{ id: 1, message: 'test log' }]
        }
      ]);
    });

    it('should return no action when logService fails', async () => {
      TestBed.configureTestingModule({
        imports: [StoreModule.forRoot({})],
        providers: [
          AppEffects,
          DataPersistence,
          provideMockActions(() => actions),
          {
            provide: LogService,
            useValue: {
              logs: () => cold('-#')
            }
          }
        ]
      });

      const effects = TestBed.get(AppEffects);
      const actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
      expect(await readAll(effects.loadData)).toEqual([null]);
    });
  });
});
