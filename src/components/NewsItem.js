import React from 'react'
import '../App.css' 
import newsimg from '../assets/news_pic.jpg'

export default function NewsItem(props) {
    let date_str=props.publishedAt;
    let date= new Date(date_str).toLocaleString();
    return (
        <div className='my-3'>
            <div className={`card my-3  mx-3 bg-${props.mode==='light'?'dark':'light'} `} style={{width:'300px'}} >
                <img src={props.img == null?newsimg:props.img}  className="card-img-top newsimg" alt="img_here"/>
                    <div className={`card-body `}>
                    <h5 className={`card-title text-${props.mode}`}>{props.title && props.title.length>55?props.title.slice(0,45).concat(".."):props.title||"No Title"}</h5>
                        <p className={`card-text text-${props.mode}`}>{props.description && props.description.length>100?props.description.slice(0,100).concat(".."):props.description || "No description"}</p>
                        <div style={{color:"grey"}}>
                           <p>publishedAt {date == null?"recently":date}</p>
                           <p>by {props.author==null?"Author":props.author}</p>
                        </div> 
                        <a href={props.url} className="btn btn-primary" target='blank'>Read News</a>
                    </div>
            </div>

        </div>
    )
}
