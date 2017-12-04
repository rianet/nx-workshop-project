import { appReducer } from './app.reducer';
import { App } from './app.interfaces';
import { DataLoaded } from './app.actions';

describe('appReducer', () => {
  it('should work', () => {
    const state: App = { eventLogs: [] };
    const action: DataLoaded = { type: 'DATA_LOADED', payload: [] };
    const actual = appReducer(state, action);
    expect(actual).toEqual({ eventLogs: [] });
  });
});
