import React from 'react'
import './SearchFilter.css'

const SearchFilter = ({search,setSearch,filter,setFilter,countries,setCountries}) => {

  const sortFuntion =(value)=>{
   const sortedCountry = [...countries].sort((a,b)=>{
    return value === "asc"
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common);
   })
    setCountries(sortedCountry);
  }
  return (
    <div className='searchFilter-container'>

      <input
      type='text'
      placeholder='Search...'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />

      <button className='searchFilter-btn' onClick={()=>sortFuntion("asc")}>Asc</button>

      <button className='searchFilter-btn' onClick={()=>sortFuntion("dsc")}>Dsc</button>

      <div>
        <select className='filter-section' value={filter} onChange={(e)=>setFilter(e.target.value)}>
            <option value="all">ALL</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
      </div>

    </div>
  )
}

export default SearchFilter
