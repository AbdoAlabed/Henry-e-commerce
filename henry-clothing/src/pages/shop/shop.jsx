import React from "react";
import SHOP_DATA from "./shop_data";
import CollectionPreview from "../../components/collection_preview/collection.preview";

class Shop extends React.Component {
  constructor() {
    super();

    this.state = {
      collectionData: SHOP_DATA,
    };
  }
  render() {
    return (
      <div>
        {this.state.collectionData.map(({ id, ...otherData }) => (
          <CollectionPreview key={id} {...otherData} />
        ))}
      </div>
    );
  }
}
export default Shop;
