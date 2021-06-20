import React from 'react'

function Input(props) {
    const {type="text",name,value,onChange,placeholder="enter placeholder"}=props;
    return (
        <input
                  className="form-control"
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  value={value}
                  onChange={onChange}
                />
    )
}

export default Input
