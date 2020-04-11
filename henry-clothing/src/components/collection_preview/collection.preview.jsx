import React from "react";

import "./collection.preview.scss";
import CollectionItem from "../collection_item/collection.item";
const CollectionPreview = ({ title, items, key }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ name, imageUrl, price, id }) => (
            <CollectionItem
              key={id}
              name={name}
              price={price}
              imageUrl={imageUrl}
            />
          ))}
      </div>
    </div>
  );
};
export default CollectionPreview;
