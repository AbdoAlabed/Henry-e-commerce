import React from "react";

import { connect } from "react-redux";
import CollectionPreview from "../collection_preview/collection.preview";

const CollectionOverview = ({ collectionData }) => {
  return (
    <div>
      {collectionData.map(({ id, ...otherDate }) => (
        <CollectionPreview key={id} {...otherDate} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ shop }) => ({ collectionData: shop });

export default connect(mapStateToProps)(CollectionOverview);
