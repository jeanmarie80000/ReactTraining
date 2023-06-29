import {React, useState } from 'react';
import DataTable from 'react-data-table-component';
// import Movies from '../data/dataMovie';



const ShoppingList = () => {
    
    const columns = [
        {
            name: <b>Nom</b>,
            selector: (row) => row.nom,
            sortable: true,
        },
        {
            name: <b>Prenom</b>,
            selector: (row) => row.prenom,
            sortable: true,
        },
        {
            name: <b>House</b>,
            selector: (row) => row.house,
            sortable: true,
        },
        {
            name: <b>id</b>,
            selector: (row) => row.id,
            sortable: true,
        }
    ];
                
    const [data, setData] = useState([
        {nom:'L\'éponge', prenom:'Bob', house:'Ananas', id: 1},
        {nom:'Le Calamar', prenom:'Carlo', house:'Moaï', id: 2},
        {nom: 'L\'étoile', prenom:'Patrick', house:'Rocher', id: 3}
    ]);

    const arrayItem = columns.map(
            (columns) =>
                <li key={columns.id}>
                    {columns.name}
                </li>
            );

    return (

        <div className='container'>
            <ul>
                <DataTable
                    columns={columns}
                    data={data}
                    defaultSortFieldId={1}
                />
            </ul>
        </div>
        
    );
}

export default ShoppingList;