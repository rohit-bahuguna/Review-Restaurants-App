import React from 'react'
import { useData  } from '../contexts/dataContext'
import Restaurants from "./Restaurants"
const Home = () => {
    const {cuisines , getCurrentRestaurants  ,  currentRestaurants} = useData()
  return (
      <div className="flex justify-center items-center my-6">
          <div className="flex flex-col gap-10">
               <h1 className="text-5xl self-center font-bold">Food Ordering App</h1>
          <p className="text-4xl self-center ">Select Your Cuisine</p>

          <div className="flex   self-center gap-5">
                {
              cuisines && cuisines.map(({ name, id }) => <button key={id} className='border bg-sky-500 rounded-full  text-black px-5 py-1 text-xl'  onClick={() => getCurrentRestaurants(id)}  >{ name}</button>)
              }
              
          </div>
          <div className="flex flex-col gap-6">
              {
                  currentRestaurants && currentRestaurants.map(restaurant => <Restaurants restaurant={restaurant } />)
              }
          </div>
         </div>
    </div>
  )
}

export default Home