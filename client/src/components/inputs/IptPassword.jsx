import React from 'react'

const IptPassword = ({ type="password", placeholder, value, onChange, className }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="iptPassword p-2 mx-auto rounded-lg d-flex mb-2 w-75"
        />
    );
};

export default IptPassword;