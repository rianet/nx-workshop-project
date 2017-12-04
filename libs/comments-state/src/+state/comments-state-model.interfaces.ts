import { Comment } from '@tuskdesk-suite/data-models';

export interface CommentsStateModel {
  comments: Comment[];
}

export interface CommentsStateModelState {
  readonly commentsStateModel: CommentsStateModel;
}
