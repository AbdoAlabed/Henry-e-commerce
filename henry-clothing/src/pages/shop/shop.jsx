import React, {useEffect, lazy, Suspense} from "react";
import { Route} from "react-router-dom";
import {connect} from 'react-redux';
import {fetchCollectionStart} from '../../redux/shop/shop.action'
import Spinner from '../../components/spinner/spinner';

const Shop = ({startFetchingCollection, match}) => {
   
    useEffect(() => {
      startFetchingCollection();
    },[startFetchingCollection])
  
    const CollectionOverviewContainer = lazy(() => import('../../components/collectionOverview/collectionOverview.container'));
    const CollectionPageContainer = lazy(() => import('../../components/collection/collection-page.container'));
    return ( 
      <div>
           <Suspense fallback={<Spinner/>}>
          <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
          </Suspense>
      </div>
    );
  }

const mapDispatchToProps = (dispatch) => (
  {
  startFetchingCollection: () => dispatch(fetchCollectionStart())
})

export default connect(null,mapDispatchToProps)(Shop);
