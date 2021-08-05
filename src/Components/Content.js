import React, { useContext,  useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Loading from './Loading';
import useFetch from './useFetch';
import { User } from '../App';

function Content() {
    const {id} = useParams();
    const history=useHistory();
    const { data: post } = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);

    const user = useContext(User);
    const [admin,setAdmin]=useState();

    useEffect(()=>{
        setAdmin(user);
    },[user]);
    // console.log(admin);

    const deleteBlog=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/' + id,{
            method:'DELETE'
        }).then(()=>{
                alert('Deleted');
                history.push('/');
        });
    }

    return (
        <>
            {post ?(
                <div className='content'>
                <>
                {''}
                
                <div className='content-image'>
                    <img src='https://picsum.photos/500/300' alt='card image' />
                </div>

                <div className='content-header'>
                    <h3>{post.title}</h3>
                </div>
                
                <div className='content-author'>
                    <p>Written By : {post.userId}</p>
                </div>

                <div className='content-body'>
                    <p>{post.body}</p>
                </div>

                <div className='content-btn'>
                    {admin ? (
                        <button onClick={deleteBlog}>Delete</button>
                    ) : (
                        <></>
                    )}
                </div>
            </>
            </div>
            ) :(
                <Loading/>
            )}
         </> 
    )
}

export default Content;
