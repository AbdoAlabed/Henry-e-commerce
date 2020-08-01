import React from "react";
import { Route, Switch } from "react-router-dom";

import CollectionOverview from "../../components/collectionOverview/collectionOverview";
import CollectionPage from "../../components/collection/collection-page";

const Shop = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Switch>
    </div>
  );
};

export default Shop;
