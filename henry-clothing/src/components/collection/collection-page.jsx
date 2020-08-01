import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../collection_item/collection.item";
import "./collection.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection[0];
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ shop }, ownProps) => {
  return {
    collection: shop.filter(
      (item) => item.title.toLowerCase() === ownProps.match.params.collectionId
    ),
  };
};

export default connect(mapStateToProps)(CollectionPage);
