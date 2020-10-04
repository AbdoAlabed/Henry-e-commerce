import {connect} from 'react-redux';
import WithSpinner from '../withSpinner/with-spinner';
import CollectionOverview from './collectionOverview';

const mapStateToProps = ({shop}) => {
    return{
        isLoading: shop.isLoading
    }
}

const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

export default CollectionOverviewContainer;