import React from 'react'


export default function header(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-body-${props.mode==='light'?'dark':'light'}`}>
                <div className="container-fluid">
                    <a className={`navbar-brand text-${props.mode==='light'?'light':'dark'}`} href="/">News</a>
                    <input className={`form-control text-${props.mode==='light'?'light':'dark'} bg-${props.mode==='light'?'dark':'light'}`} type="search"
                           placeholder="Search" aria-label="Search" onChange={(e)=>props.searchValue(e.target.value)} style={{width:'20%', right:'50px'}}/>
                    <button type="button" className="btn btn-success" onClick={()=>{props.setMode(props.mode==='light'?'dark':'light') ;props.showAlert() }}>{props.mode}</button>
                </div>
            </nav>
        </div>
    )
}
