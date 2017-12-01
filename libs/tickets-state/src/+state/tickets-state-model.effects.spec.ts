import { TicketsStateModelEffects } from './tickets-state-model.effects';
import { DataPersistence } from '@nrwl/nx';
import { readAll, hot, cold } from '@nrwl/nx/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { TicketService } from '@tuskdesk-suite/backend';
import { Observable } from 'rxjs/Observable';

describe('TicketsStateModelEffects', () => {
  let actions;
  let effects: TicketsStateModelEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        TicketsStateModelEffects,
        DataPersistence,
        provideMockActions(() => actions),
        {
          provide: TicketService,
          useValue: {
            ticketById: (id: number) => {
              return id === 1 ? Observable.of({ id: 1 }) : cold('#');
            }
          }
        }
      ]
    });

    effects = TestBed.get(TicketsStateModelEffects);
  });

  describe('loadTicket', () => {
    it('should dispatch TICKET_LOADED when a ticket is found', async () => {
      actions = hot('-a-|', { a: { type: 'LOAD_TICKET', payload: 1 } });
      expect(await readAll(effects.loadTicket)).toEqual([{ type: 'TICKET_LOADED', payload: { id: 1 } }]);
    });
    it('should not dispatch when ticket is not found', async () => {
      actions = hot('-a-|', { a: { type: 'LOAD_TICKET', payload: -1 } });
      expect(await readAll(effects.loadTicket)).toEqual([]);
    });
  });
});
