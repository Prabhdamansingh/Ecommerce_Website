import React, { Fragment } from 'react';
import './MenuItem.scss';
import { withRouter, Link } from 'react-router-dom';

const MenuItem = ({
    sections: { id, title, imageUrl, size, history, match },
}) => {
    return (
        <Fragment>
            <Link className={`${size} menu-item`} to={`/category/${title}`}>
                <div
                    style={{ backgroundImage: `url(${imageUrl})` }}
                    className="background-image"
                />
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </Link>
        </Fragment>
    );
};

export default withRouter(MenuItem);
