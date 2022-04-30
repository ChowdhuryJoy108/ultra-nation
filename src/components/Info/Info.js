import React from 'react';
import './Info.css'
const Info = (props) => {

    const {region,population,borders,capital,subregion} = props.info;
    console.log(props.info);
   
    return (
        <div className='countryInfo'> 
            <h3>official Name : </h3>
            <h4>Capital : {capital} </h4>
            <h4>Population : {population} </h4>
            <h5>Borders with : {borders} </h5>
            <p>Region : {region} </p>
            <p>Sub-region: {subregion} </p> 
            
        </div>
    );
};

export default Info;