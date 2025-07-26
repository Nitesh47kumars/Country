import React, { useEffect, useState, useTransition } from 'react'
import { getCountries } from '../api_JSON/PostAPI';
import './Country.css'
import Loader from '../Loader/Loader';
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import SearchFilter from '../SearchCountry/SearchFilter'

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries,setCountries] = useState([]);

  const [search,setSearch] = useState("");
  const [filter,setFilter] = useState('all');

  const [debounceSearch,setDebounceSearch] = useState('');

  useEffect(()=>{
    startTransition( async ()=>{
      const res = await getCountries();
      setCountries(res.data);
    })
  },[]);

  useEffect(()=>{
    const handle = setInterval(()=>{
      setDebounceSearch(search);
    },500);

    return ()=> clearInterval(handle);
  },[search])

  const searchFilter = (country) =>{
    if(debounceSearch){
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  }

  const regionFilter = (country) =>{
    if(filter === "all") return true;
    return country.region === filter;
  }


  const filterCountry = countries.filter((country)=>searchFilter(country) && regionFilter(country))

  if(isPending) return <Loader/>

  return (
    <>
      <div className='country-container'>

        <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
        />

        <ul>
          {filterCountry.map((curr,idx)=>{
            const {capital,flags,name,population,region} = curr;
            return <li 
            key={idx}
            className='country-card'>
              <div className='country-image'>
                <img src={flags.svg}/>
              </div>
              <div className='country-details'>
                <h1>{name.common}</h1>
                <p>Capital: {capital}</p>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <NavLink to={`/country/${name.common}`} className={"button-link"}>
                  Read More<FaArrowRight/>
                </NavLink>
              </div>
            </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default Country
