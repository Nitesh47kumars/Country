import React from 'react'
import api from "../api_JSON/api.json"
import './About.css'

const About = () => {
  return (
    <>
    <div className='about-container'>
        <h1>Here are the Interesting Facts<br/> We are Proud of</h1>
        <ul>
            {api.map((curr)=>{
                const {name, capital, population,fact} = curr;
                return <li
                key={curr.id}
                className='about-card'
                >
                    <h1>{name}</h1>
                    <p>Capital: {capital}</p>
                    <p>Population: {population}</p>
                    <p>Interesting Fact: {fact}</p>

                </li>
            })}
        </ul>
        
    </div>
    </>
  )
}

export default About
