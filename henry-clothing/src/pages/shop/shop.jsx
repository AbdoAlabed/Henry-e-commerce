import React from "react";
import { Route} from "react-router-dom";
import {connect} from 'react-redux';
import {UpdateCollection} from '../../redux/shop/shop.action'

import CollectionOverview from "../../components/collectionOverview/collectionOverview";
import CollectionPage from "../../components/collection/collection-page";
import {firestore, convertCollectionsSnapshotToMap} from "../../components/firebase/firebase.utils";

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;
   
  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    const {updatedCollection} = this.props;

    updatedCollection(collectionsMap)
    })
  }

  render(){
    const {match} = this.props;
    return ( 
      <div>
          <Route exact path={`${match.path}`} component={CollectionOverview} />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPage}
          />
        
      </div>
    );
  }
} 
const mapDispatchToProps = (dispatch) => (
  {
  updatedCollection: collectionMap => dispatch(UpdateCollection(collectionMap))
})

export default connect(null,mapDispatchToProps)(Shop);
