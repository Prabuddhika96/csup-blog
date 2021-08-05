import React from 'react';
import { Link } from 'react-router-dom';

function Card({data}) {
    // console.log(data);
    
    return (
        <div className='card'>
            <div className='card-image'>
                <img src='https://picsum.photos/250/200' alt='card image' />
            </div>
            
            <div className='card-header'>
                <h3>{data.title}</h3>
            </div>

            <div className='card-author'>
                <p>Written By : {data.userId}</p>
            </div>

            <div className='card-btn'>
                <Link to={`/posts/${data.id}`}><button>Read More</button></Link>
            </div>
        </div>
    )
}

export default Card;