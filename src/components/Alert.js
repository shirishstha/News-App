import React from 'react'

export default function Alert(props) {
    return (
        <div>
            <div className="alert alert-success alert-dismissible fade show" role="alert" style={{position:'fixed',top:'10px',right:'90px',width:'20%'}}>
                <strong>{props.mode==='light'?'Dark':'Light'}</strong> mode enabled. 
            </div>


        </div>
    )
}
