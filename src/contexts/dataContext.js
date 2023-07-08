import { createContext, useContext, useState } from 'react';
import { restaurantsData, cuisineData } from '../utils/data';

const DataContext = createContext();

const DataProvider = ({ children }) => {


    const [restaurants, setRestaurants] = useState(restaurantsData);
    const [cuisines, setCuisines] = useState(cuisineData)
    const [currentRestaurants, setCurrentRestaurants] = useState([]);

    const getCurrentRestaurants = (cusineId) => {
        const result = restaurants.filter(({ cuisine_id }) => cuisine_id === cusineId)

        setCurrentRestaurants(result)
    }

    const addNewReview = (review, restaurantId) => {
        const newData = restaurants.map((restaurant) => {
            return restaurant.id == restaurantId ? { ...restaurant, ratings: [...restaurant.ratings, review] } : restaurant
        })

        setRestaurants(newData)
    }

    return (
        <DataContext.Provider
            value={{
                restaurants,
                cuisines,
                setRestaurants,
                setCuisines,
                getCurrentRestaurants
                ,
                addNewReview,
                currentRestaurants
            }}>
            {children}
        </DataContext.Provider>
    );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };