import React from 'react';
import SHOP_DATA from './Shop.Data';
import PreviewCollection from '../preview-collection/PreviewCollection';

class Shop extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA,
        };
    }
    render() {
        const { collections } = this.state;

        return (
            <div className="shop-page">
                {collections.map(({ id, ...othercollectionprops }) => (
                    <PreviewCollection key={id} {...othercollectionprops} />
                ))}
            </div>
        );
    }
}

export default Shop;
