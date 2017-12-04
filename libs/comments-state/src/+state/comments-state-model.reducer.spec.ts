import { commentsStateModelReducer } from './comments-state-model.reducer';
import { CommentsStateModel } from './comments-state-model.interfaces';
import { TicketCommentsLoaded } from './comments-state-model.actions';

describe('commentsStateModelReducer', () => {
  it('should work', () => {
    const state: CommentsStateModel = { comments: [] };
    const action: TicketCommentsLoaded = { type: 'TICKET_COMMENTS_LOADED', payload: [] };
    const actual = commentsStateModelReducer(state, action);
    expect(actual).toEqual({ comments: [] });
  });
});
