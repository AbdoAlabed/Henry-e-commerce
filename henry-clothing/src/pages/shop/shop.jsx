import React from "react";
import { Route} from "react-router-dom";
import {connect} from 'react-redux';
import {UpdateCollection} from '../../redux/shop/shop.action'

import CollectionOverview from "../../components/collectionOverview/collectionOverview";
import CollectionPage from "../../components/collection/collection-page";
import {firestore, convertCollectionsSnapshotToMap} from "../../components/firebase/firebase.utils";
import WithSpinner from '../../components/withSpinner/with-spinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
 constructor(props){
   super(props)
   this.state = {
     isLoading : true
   }
 }

  unsubscribeFromSnapshot = null;
   
  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    const {updatedCollection} = this.props;
    updatedCollection(collectionsMap)

    this.setState({isLoading: false});
    })
  }

  render(){
    const {match} = this.props;
    const {isLoading} = this.state;
    return ( 
      <div>
          <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props}/>} />
          <Route
            path={`${match.path}/:collectionId`}
            render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props}/>}
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
