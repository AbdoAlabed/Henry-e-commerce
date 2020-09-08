export const collectionsToArray = (collections) => {
    const collectionsKey = Object.keys(collections);
   return collectionsKey.map(collection => {
      return collections[collection];
   })
}
