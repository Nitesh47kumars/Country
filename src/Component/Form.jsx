import React, { useEffect, useState } from 'react'
import { postAPI, putAPI } from '../API/GetAPI';

const Form = ({post,setPost,updateInput,setUpdateInput}) => {
    const [userInput,setUserInput] = useState({
        title: '',
        body: '',
    });

    const isEmpty = Object.keys(updateInput || {}).length === 0;

    useEffect(()=>{
        updateInput && (
            setUserInput({
                title: updateInput.title,
                body: updateInput.body,
            })
        )
    },[updateInput]);

    const onHandleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUserInput((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }

    const addFunction = async () =>{
        try{
            const res = await postAPI(userInput);
            if(res.status === 201){
                setPost((prev)=>{
                    return [
                        ...prev,
                        res.data
                    ]
                })
            }
            setUserInput({
                title: '',
                body: '',
            })
        }
        catch(e){
            console.log(e.messsage);
        }
    }

    const updateFunction = async () =>{
        try{
            const res = await putAPI(updateInput.id,userInput);

            if(res.status === 200){
                setPost((prev)=>prev.map((curr)=>{
                    return curr.id === res.data.id ? res.data : curr;
                }))
                setUserInput({title: '', body: ''});
                setUpdateInput({});
            }
        }
        catch(e){
            console.log(e.messsage);
        }
    }

    const onFormSubmit = (e) =>{
        e.preventDefault();
        if(!userInput.title.trim() || !userInput.body.trim()) return;

        const action  = e.nativeEvent.submitter.value;
        if(action === 'add'){
            addFunction();
        }
        else if(action === 'update'){
            updateFunction();
        }
    }
  return (
    <>
      <form className='post-form' onSubmit={onFormSubmit}>
        <div className='post-inputs'>
            <input
            type='text'
            name='title'
            autoComplete='off'
            placeholder='Enter Here To Add Title...'
            value={userInput.title}
            onChange={onHandleChange}
            />

            <input
            type='text'
            name='body'
            autoComplete='off'
            placeholder='Enter Here To Add Bio...'
            value={userInput.body}
            onChange={onHandleChange}
            />

        </div>
        <button value={isEmpty? "add" : 'update'}>{isEmpty? "add" : 'submit'}</button>
      </form>
    </>
  )
}

export default Form
