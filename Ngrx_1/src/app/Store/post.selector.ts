import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postsState } from "./modle";

export const selectorpostFeature = createFeatureSelector<postsState>('postsState')



export const selectProdcutSelector = createSelector(
    selectorpostFeature,
    (state:postsState) => state.posts
)
export const selectErrorSelector = createSelector(
    selectorpostFeature,
    (state:postsState) => state.error
)