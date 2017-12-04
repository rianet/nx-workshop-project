import { CommentsStateModel } from './comments-state-model.interfaces';
import { CommentsStateModelAction } from './comments-state-model.actions';

export function commentsStateModelReducer(
  state: CommentsStateModel,
  action: CommentsStateModelAction
): CommentsStateModel {
  switch (action.type) {
    case 'TICKET_COMMENTS_LOADED': {
      return {
        ...state,
        comments: [...action.payload]
      };
    }
    default: {
      return state;
    }
  }
}
