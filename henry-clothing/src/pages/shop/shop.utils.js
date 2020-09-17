export const collectionsToArray = (collections) => {
    const collectionsKey = collections ? Object.keys(collections) : [];
   return collectionsKey.map(collection => {
      return collections[collection];
   })
}
