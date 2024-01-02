import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Coctails.css"

const Coctails = () => {
  const [coctails, setCoctails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
        setCoctails(response.data.drinks || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='coctails_container'>
      <h1>Alcoholic Coctails</h1>
      <ul>
        {coctails.map(coctail => (
          <li key={coctail.idDrink}>{coctail.strDrink}</li>
        ))}
      </ul>
    </div>
  );
};

export default Coctails;
