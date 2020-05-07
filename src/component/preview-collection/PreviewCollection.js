import React from 'react';
import PreviewItem from '../preview-item/PreviewItem';
import './PreviewCollection.scss';
import { Link } from 'react-router-dom';

const PreviewCollection = ({ collection: { id, routeName, title, items } }) => {
    return (
        <div className="collection-preview">
            <Link to={`/category/${routeName}`}>
                <h1 className="title">{title.toUpperCase()}</h1>
            </Link>
            <div className="preview">
                {items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <PreviewItem key={item.id} item={item}></PreviewItem>
                    ))}
            </div>
        </div>
    );
};

export default PreviewCollection;
