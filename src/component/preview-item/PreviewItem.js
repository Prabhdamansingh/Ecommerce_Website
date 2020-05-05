import React from 'react';
import './PreviewItem.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

import CustomButton from '../custombutton/CustomButton';

const PreviewItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>
                ADD TO CART{' '}
            </CustomButton>
        </div>
    );
};

const mapDispatchToProps = {
    addItem,
};

export default connect(null, mapDispatchToProps)(PreviewItem);
