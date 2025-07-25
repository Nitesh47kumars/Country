import React, { useEffect, useState } from 'react'
import './Accordion.css'
import initialData from './faq.json'
import FAQ from './FAQ';

const Accordion = () => {
  const [data,setData] = useState([]);
  const [active,setActive] = useState(false);

  const onHandleClick = (id) =>{
    setActive((prev)=>(prev === id)? false : id);
  }
    
  useEffect(()=>{
    setData(initialData);
  },[]);

  return (
    <>
      <div className='accordion-container'>
        <ul>
          {data.map((curr)=>{
            return <FAQ
            key={curr.id}
            curr={curr}
            active={active === curr.id}
            onToggle={()=>onHandleClick(curr.id)}
            />
          })}
        </ul>
        
      </div>
    </>
  )
}

export default Accordion
