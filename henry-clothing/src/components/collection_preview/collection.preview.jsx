import React from "react";

const CollectionPreview = ({ title, items, key }) => {
  return (
    <div>
      <h1>{title}</h1>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <div>{item.name}</div>
        ))}
    </div>
  );
};
export default CollectionPreview;
