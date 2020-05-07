import React, { Fragment } from 'react';
import './Category.scss';
import PreviewItem from '../preview-item/PreviewItem';
import { connect } from 'react-redux';
import { selectShopCollection } from '../../redux/shop/shop.selector';
import { withRouter, Link } from 'react-router-dom';

const Category = ({ collection }) => {
    const empty = <h2>Page Not Found</h2>;

    return (
        <div className="category-page">
            {collection ? (
                <Fragment>
                    <div className="category-header">
                        <Link className="logo-container" to={`/`}>
                            &#8592;
                        </Link>
                        <h2 className="title">{collection.title}</h2>
                    </div>

                    <div className="items">
                        {collection.items.map((item) => (
                            <PreviewItem key={item.id} item={item} />
                        ))}
                    </div>
                </Fragment>
            ) : (
                <Fragment>{empty}</Fragment>
            )}
        </div>
    );
};

const mapStateToProps = (
    state,
    {
        match: {
            params: { id },
        },
    }
) => ({
    collection: selectShopCollection(id)(state),
});

export default withRouter(connect(mapStateToProps)(Category));
