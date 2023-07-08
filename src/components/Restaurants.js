import React from 'react'
import MenuCard from "./MenuCard"
import {Link} from "react-router-dom"

const Restaurants = ({ restaurant }) => {
    const {name , id , menu } = restaurant
    return (
        <div>
            <Link to={`/${name}/${id}`}>
                
                            <h1 className="text-3xl mb-5 font-semibold">Dishes by {name}</h1>

               </Link>
            
            <div className="flex  gap-5 flex-wrap ">
                 {
                menu && menu.map(item => <MenuCard item={ item} restaurantName={name} />)
            }
           </div>
        </div>
    )
}

export default  Restaurants