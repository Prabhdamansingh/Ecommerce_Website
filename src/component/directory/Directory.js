import React from 'react';
import './Directory.scss';
import MenuItem from '../menu-item/MenuItem';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map((sections) => (
                <MenuItem key={sections.id} sections={sections} />
            ))}
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
