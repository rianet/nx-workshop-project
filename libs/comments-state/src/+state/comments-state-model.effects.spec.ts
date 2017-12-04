import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { readAll, hot, cold } from '@nrwl/nx/testing';
import { CommentsStateModelEffects } from './comments-state-model.effects';
import { TicketService } from '@tuskdesk-suite/backend';

describe('CommentsStateModelEffects', () => {
  describe('loadData', () => {
    it('should work', async () => {
      TestBed.configureTestingModule({
        imports: [StoreModule.forRoot({})],
        providers: [
          CommentsStateModelEffects,
          DataPersistence,
          provideMockActions(() => actions),
          {
            provide: TicketService,
            useValue: { comments: () => cold('-a-|', { a: [] }) }
          }
        ]
      });
      const effects = TestBed.get(CommentsStateModelEffects);
      const actions = hot('-a-|', { a: { type: 'LOAD_TICKET_COMMENTS' } });
      expect(await readAll(effects.loadData)).toEqual([{ type: 'TICKET_COMMENTS_LOADED', payload: [] }]);
    });
  });
});
