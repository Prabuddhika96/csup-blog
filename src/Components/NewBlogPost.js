import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

function NewBlogPost() {
    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState('');
    const [body, setBody] = useState('');
    
    const history = useHistory();

    const addBlog=(e)=>{
        e.preventDefault();

        const newBlog={title,userId,body};

        if(title==='' || userId==='' || body===''){
            alert('Please fill in all the fields on this form');
        }
        else{
            fetch('https://jsonplaceholder.typicode.com/posts',{
                method:'POST',
                headers:{'content-type': 'application/json'},
                body: JSON.stringify(newBlog),
            }).then((response)=>response.json()).then((json)=>{
                console.log(json);
                alert('Added');
                history.push('/');
            })
        }
    }

    return (
        <div className='new-blog'>
            <form onSubmit={addBlog}>
                <label><h3>Add New Blog</h3></label>

                <label>Title</label>
                <input type='text' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />

                <label>Written By</label>
                <input type='text' placeholder='Writter' value={userId} onChange={(e)=>setUserId(e.target.value)}/>

                <label>Content</label>
                <textarea type='text' placeholder='Content' value={body} onChange={(e)=>setBody(e.target.value)}></textarea>

                <div className='card-btn'>
                    <button>Submit</button>
                 </div>
            </form>
        </div>
    )
}

export default NewBlogPost
