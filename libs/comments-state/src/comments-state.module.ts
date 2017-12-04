import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { commentsStateModelReducer } from './+state/comments-state-model.reducer';
import { commentsStateModelInitialState } from './+state/comments-state-model.init';
import { CommentsStateModelEffects } from './+state/comments-state-model.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('commentsStateModel', commentsStateModelReducer, {
      initialState: commentsStateModelInitialState
    }),
    EffectsModule.forFeature([CommentsStateModelEffects])
  ],
  providers: [CommentsStateModelEffects]
})
export class CommentsStateModule {}
