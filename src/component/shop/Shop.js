import React from 'react';
import { Route } from 'react-router-dom';
import PreviewAllCollections from '../preview-all-collections/PreviewAllCollections';
import Category from '../category/Category';

const Shop = ({ match }) => {
    return (
        <div>
            <Route
                exact
                path={`${match.path}`}
                component={PreviewAllCollections}
            ></Route>
            <Route
                path={`${match.path}:categoryId`}
                component={Category}
            ></Route>
        </div>
    );
};

export default Shop;
