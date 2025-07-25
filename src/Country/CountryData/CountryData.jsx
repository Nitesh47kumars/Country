import React, { useEffect, useState, useTransition } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getCountryData } from '../../api_JSON/PostAPI';
import Loader from '../../Loader/Loader';
import './CountryData.css'

const CountryData = () => {
  const params = useParams();
  const [country,setCountry] = useState(null);
  const [isPending,startTransition] = useTransition();

  const navigate = useNavigate();

  useEffect(()=>{
    startTransition( async () =>{
      try{
        const res = await getCountryData(params.id);
        setCountry(res.data[0]);
        console.log(res.data);
      }
      catch(e){
        console.log("Failed to Fetch Data...",e.message);
      }
    })
  },[])

  if(isPending || !country) return <Loader/>
  return (
    <div className='country-details-container'>
      <div className='country-details-card'>
        <div className='country-detail-overlay'/>
        <div className='flag-section'>
          <img
          src={country.flags.svg}
          alt={country.flags.alt}
           />
        </div>
        <div className='info-section'>
          <h1>{country.name.common}</h1>
          <p>Capital: <strong>{country.capital[0]}</strong></p>
          <p>Language: <strong>{country.languages.ron}</strong></p>
          <p>Currency: 
            {Object.keys(country.currencies).map((curr)=>{
              return <strong>{country.currencies[curr].name} {country.currencies[curr].symbol}</strong>
              })}
          </p>
          <p>Border: {Object.keys(country.borders).map((curr)=>country.borders[curr]).join(",")}</p>
          <p>Official Name: <strong>{country.name.official}</strong></p>
          <p>TOp Level Domain: <strong>{country.tld[0]}</strong></p>

          <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
      </div>
    </div>
  )
}

export default CountryData
