import React from 'react';
import './PreviewAllCollection.scss';
import PreviewCollection from '../preview-collection/PreviewCollection';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
    selectShopCollections,
    selectShopCollectionsForPreview,
} from '../../redux/shop/shop.selector';

const PreviewAllCollections = ({ collections }) => {
    return (
        <div className="preview-all-collections">
            {collections.map((collection) => (
                <PreviewCollection
                    key={collection.id}
                    collection={collection}
                />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(PreviewAllCollections);
