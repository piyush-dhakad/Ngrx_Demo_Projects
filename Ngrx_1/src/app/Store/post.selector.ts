import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postState } from "./post.reducer";
import { state } from "@angular/animations";

export const selectorpostFeature = createFeatureSelector<postState>('post')
export const selectProdcutSelector = createSelector(
    selectorpostFeature,
    (state:postState) => state.posts
)
export const selectErrorSelector = createSelector(
    selectorpostFeature,
    (state:postState) => state.error
)