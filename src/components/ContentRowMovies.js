import React from 'react'
import SmallCard from './SmallCard'

function ContentRowMovies({products,users,productsCategory}) {
  let moviesInDB = {
    title: 'Total de productos',
    color: 'primary',
    cuantity: products,
    icon: 'fa-clipboard-list',
  }
  
  let totalAwards = {
    title: ' Total de usuarios',
    color: 'success',
    cuantity: users,
    icon: 'fa-award',
  }
  
  let actorsQuantity = {
    title: 'Total de categorías',
    color: 'warning',
    cuantity: productsCategory,
    icon: 'fa-user-check',
  }
  
  let cartProps = [moviesInDB, totalAwards, actorsQuantity]
  return (
    <div className="row">
      {cartProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />
      })}
    </div>
  )
}

export default ContentRowMovies
