import React from 'react';
import PreviewItem from '../preview-item/PreviewItem';
import './PreviewCollection.scss';

const PreviewCollection = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
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
