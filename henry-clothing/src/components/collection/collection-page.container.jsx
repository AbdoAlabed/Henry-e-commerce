import {connect} from 'react-redux';
import WithSpinner from '../withSpinner/with-spinner';
import CollectionPage from './collection-page';

const mapStateToProps = ({shop}) => {
    return{
        isLoading: shop.isLoading
    }
}

const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionPageContainer;