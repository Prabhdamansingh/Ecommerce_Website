import React from 'react';
import PreviewItem from '../preview-item/PreviewItem';
import './PreviewCollection.scss';

const PreviewCollection = ({ title, items }) => {
    return (
        <div class="collection-preview">
            <h1 class="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, index) => index < 4)
                    .map(({ id, ...otherprops }) => (
                        <PreviewItem key={id} {...otherprops}></PreviewItem>
                    ))}
            </div>
        </div>
    );
};

export default PreviewCollection;
