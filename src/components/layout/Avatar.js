import React from 'react'

export default function Avatar(props) {
    const {url,height="100px",width="100px"}=props;
    return (
        <div style={{width,margin:"auto",height}}>
            <img src={url} alt="user" className="card-img-top rounded-circle"/>
        </div>
    )
}
