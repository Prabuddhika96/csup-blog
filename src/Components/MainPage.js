import React from 'react'
import Card from './Card'
import Loading from './Loading';
import useFetch from './useFetch';

function MainPage() {
    // console.log(props.post)

    const {data: posts}=useFetch('https://jsonplaceholder.typicode.com/posts');
    // console.log(posts);
    return (
        <div className='main-page'>
            {posts ? (
                posts.map((d)=> <Card data={d} key={d.id}/>)
            ) : (
                <Loading/>
            )}
        </div>
    );
}

export default MainPage
