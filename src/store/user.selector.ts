import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../models/app-state';

export const getUserData = createSelector(
    createFeatureSelector<AppState>('user'),
    (state) => state.userData
);