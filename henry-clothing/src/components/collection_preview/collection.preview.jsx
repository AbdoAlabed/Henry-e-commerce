import React from "react";

import "./collection.preview.scss";
import CollectionItem from "../collection_item/collection.item";
const CollectionPreview = ({ title, items, ...otherProps}) => {
  const {history, match, routName} = {...otherProps}
  return (
    <div className="collection-preview">
      <h1 className="title" style={{cursor: 'pointer'}} onClick={() => history.push(`${match.path}/${routName}`)}>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
export default CollectionPreview;
