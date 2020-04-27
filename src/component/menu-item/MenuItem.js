import React, { Fragment } from 'react';
import './MenuItem.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, match }) => {
    return (
        <Fragment>
            <div
                className={`${size} menu-item`}
                onClick={() => history.push(`${match.url}and`)}
            >
                <div
                    style={{ backgroundImage: `url(${imageUrl})` }}
                    className="background-image"
                />
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </Fragment>
    );
};

export default withRouter(MenuItem);
