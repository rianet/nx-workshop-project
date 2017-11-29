import { ticketsStateModelReducer } from './tickets-state-model.reducer';
import { ticketsStateModelInitialState } from './tickets-state-model.init';
import { TicketsStateModel } from './tickets-state-model.interfaces';
import { TicketsLoaded } from './tickets-state-model.actions';

describe('ticketsStateModelReducer', () => {
  it('should work', () => {
    const state: TicketsStateModel = {};
    const action: TicketsLoaded = { type: 'TICKETS_LOADED', payload: {} };
    const actual = ticketsStateModelReducer(state, action);
    expect(actual).toEqual({});
  });
});
