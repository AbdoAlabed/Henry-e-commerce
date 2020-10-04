import React from "react";
import { Route} from "react-router-dom";
import {connect} from 'react-redux';
import {fetchCollectionStart} from '../../redux/shop/shop.action'
import CollectionOverviewContainer from '../../components/collectionOverview/collectionOverview.container'
import CollectionPageContainer from '../../components/collection/collection-page.container'

class Shop extends React.Component {
   
  componentDidMount() {
    const {startFetchingCollection} = this.props;
    startFetchingCollection();
  }

  render(){
    const {match} = this.props;
    return ( 
      <div>
          <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
        
      </div>
    );
  }
} 

const mapDispatchToProps = (dispatch) => (
  {
  startFetchingCollection: () => dispatch(fetchCollectionStart())
})

export default connect(null,mapDispatchToProps)(Shop);
