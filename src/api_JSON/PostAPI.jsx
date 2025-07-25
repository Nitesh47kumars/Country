import axios from "axios";

const API = axios.create({
    baseURL : "https://restcountries.com/v3.1",
});

export const getCountries = () =>{
    return API.get("/all?fields=name,population,region,capital,flags");
}

export const getCountryData = (id) =>{
    return API.get(`/name/${id}?fullText=true&fields=name,population,region,
        subregion,capital,tld,currencies,languages,borders,flags`);
}