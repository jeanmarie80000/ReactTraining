import {React, useState, useEffect} from 'react';
import axios  from 'axios';
import Navigation from '../countryList/Nav';

export default function Country() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then( (res) => setData(res.data) );
        }, []);            
            
    return (
        <div>
            <Navigation />
            <h1>Countries</h1>
            <ul>
                {data.map((country, index) =>
                    <li key={index}>{index}, {country.name.common}</li>
                    )
                }
            </ul>
        </div>
    );
}