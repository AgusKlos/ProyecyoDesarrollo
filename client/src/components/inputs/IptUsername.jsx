import React from 'react'

const IptUsername = ({ type, placeholder, value, onChange, className }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="iptUsername p-2 rounded-lg d-flex mx-auto mb-2 w-75"
        />
    )
};

export default IptUsername;
