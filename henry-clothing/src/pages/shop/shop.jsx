import React from "react";
import { Route, Switch } from "react-router-dom";

import CollectionOverview from "../../components/collectionOverview/collectionOverview";
import CategoryPage from "../../components/category/category-page";

const Shop = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/hats`} component={CategoryPage} />
      </Switch>
    </div>
  );
};

export default Shop;
