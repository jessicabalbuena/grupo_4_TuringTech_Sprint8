import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Total de productos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total de usuarios', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Total de categorías' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];


    function ContentRowMovies() {
        fetch('http://localhost:3000/api/listarUsuario')
            .then((res) => res.json())
            .then((users) => console.log(users))
        return (
            <div className="row">
            {cartProps.map((movie, i) => {
                return <SmallCard {...movie} key={i} />

            })}
            </div>
        )
        }
    


export default ContentRowMovies;