import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';


// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key=> collections[key])
);

export const selectCollection = memoize(collectionUrlPeram => 
createSelector(
    [selectCollections],
    collections => collections[collectionUrlPeram]
));