import React from "react";

import { connect } from "react-redux";
import CollectionPreview from "../collection_preview/collection.preview";
import {collectionsToArray} from '../../pages/shop/shop.utils'

const CollectionOverview = ({ collection, ...otherProps}) => {
  return (
    <div>
      {collection.map(({ id, ...otherData }) => (
        <CollectionPreview key={id} {...otherData} {...otherProps}/>
      ))}
    </div>
  );
};

const mapStateToProps = ({ shop }) => {
  const shopCollections = collectionsToArray(shop.collections)
  return{
     collection: shopCollections
    }
}

export default connect(mapStateToProps)(CollectionOverview);
