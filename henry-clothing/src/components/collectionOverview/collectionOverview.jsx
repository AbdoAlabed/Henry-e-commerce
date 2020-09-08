import React from "react";

import { connect } from "react-redux";
import CollectionPreview from "../collection_preview/collection.preview";
import {collectionsToArray} from '../../pages/shop/shop.utils'

const CollectionOverview = ({ collection }) => {
  const collections = collectionsToArray(collection)
  return (
    <div>
      {collections.map(({ id, ...otherDate }) => (
        <CollectionPreview key={id} {...otherDate} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ shop }) => ({ collection: shop.collections });

export default connect(mapStateToProps)(CollectionOverview);
