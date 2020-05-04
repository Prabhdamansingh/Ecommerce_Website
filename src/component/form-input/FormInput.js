import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherprops }) => {
    return (
        <div className="group">
            <input
                className="form-input"
                onChange={handleChange}
                {...otherprops}
            />
            {label ? (
                <label
                    className={`${
                        otherprops.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
};

FormInput.propTypes = {};

export default FormInput;
