import React, { useEffect, useState } from 'react'
import { deleteAPI, getAPI } from '../API/GetAPI';
import './Posts.css'
import Form from './Form';

const Posts = () => {
    const [post,setPost] = useState([]);
    const [updateInput,setUpdateInput] = useState({});

    const getApi = async () =>{
        const res = await getAPI();
        return setPost(res.data);
    }
    
    useEffect(()=>{
        getApi();
    },[]);

    const editFunction = (curr) => {setUpdateInput(curr)};


    const deleteFunction = async (id) =>{
        const res = await deleteAPI(id);
        if(res.status === 200){
            const update = post.filter((i)=>i.id !== id);
            setPost(update)
        }
        else{
            console.log("Failed to Delete...",res.status)
        }
    }
    
  return (
    <>
      <div className='post-container'>
        <Form
        post={post}
        setPost={setPost}
        updateInput={updateInput}
        setUpdateInput={setUpdateInput}
        />
        <ol>
            {post && (
                post.map((curr)=>{
                    return <li
                    key={curr.id}
                    className='post-list'
                    >
                        <h3>Title: {curr.title}</h3>
                        <p>Body: {curr.body}</p>
                        <div className='post-buttons'>
                            <button onClick={()=>editFunction(curr)}>Edit</button>
                            <button onClick={()=>deleteFunction(curr.id)}>Delete</button>
                        </div>
                    </li>
                })
            )}
        </ol>
      </div>
    </>
  )
}

export default Posts
