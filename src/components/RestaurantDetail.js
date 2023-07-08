import { AiFillStar } from 'react-icons/ai';
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useData } from '../contexts/dataContext'

const RestaurantDetail = () => {
    const { restaurantId } = useParams()
    const { restaurants, addNewReview } = useData()
    const navigate = useNavigate()

    const currentRestaurant = restaurants.filter(({ id }) => restaurantId == id)[0]
    const { name, menu, address, phone, averageRating, description, ratings } = currentRestaurant
    const [newReview, setNewReview] = useState({
        rating: 1,
        comment: "",
        revName: "Guest",
        pp: "https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU="
    })
    const [openModal, setOpenModal] = useState(false)


    useEffect(() => {

    }, [restaurants])

    return (
        <div className="flex justify-center items-center mt-8 relative ">
            <div className="w-[80%]">
                <div className="flex justify-between  border-b-2 py-5">
                    <div>
                        <button className='border bg-red-500 rounded-full py-2 text-black px-8 text-xl'
                            onClick={() => navigate(-1)}
                        >
                            {" Back"}
                        </button>
                    </div>
                    <div>
                        <h1 className="text-5xl mb-3 font-bold">
                            {name}
                        </h1>
                        <div className="text-gray-500">
                            <p>
                                {menu && menu.map(({ name, id }) => <span key={id}>{name}, </span>)}
                            </p>
                            <p>
                                {description}
                            </p>
                            <p>
                                {address}
                            </p>
                            <p>
                                {phone}
                            </p>

                            <p>Average Rating {averageRating}</p>
                        </div>

                    </div>

                    <div>
                        <button className='border bg-sky-500 rounded-full py-2 text-black px-5 text-xl'
                            onClick={() => setOpenModal(true)}
                        >
                            Add Review
                        </button>
                    </div>
                </div>

                <div>
                    <h1 className="text-2stxl font-semibold my-5">Reviews</h1>

                    <div>
                        {
                            ratings && ratings.map(({ pp, comment, revName, rating }) => <div className="flex justify-between border-b-2 px-5 mb-5 py-3">
                                <div >
                                    <div className="flex gap-2">
                                        <img src={pp} className="w-14 rounded-full" />
                                        <span className="text-lg font-semibold">
                                            {revName}
                                        </span>
                                    </div>
                                    <p className="mt-3">{comment}</p>
                                </div>
                                <p className="bg-green-100 w-14 h-6 text-center rounded-full px-2">{rating}
                                    <AiFillStar className="inline ml-2 text-green-500" />
                                </p>
                            </div>)
                        }
                    </div>
                </div>
            </div>

            {
                openModal && <div className="absolute border rounded-xl shadow-xl p-3 bg-white  flex justify-center items-start md:w-[30%] w-[50%] h-auto">
                    <div className="flex gap-10 items-center flex-col">
                        <div className="flex justify-between w-full">
                            <h1 className="text-3xl font-semibold ">Add Your Review</h1>

                            <button className="text-2xl border px-3 rounded-full hover:text-red-500 hover:bg-red-100 "
                                onClick={() => setOpenModal(false)}
                            >
                                X
                            </button>
                        </div>
                        <label className="w-full " >
                            <span className="text-lg mr-5">
                                Rating
                            </span>
                            <select className="w-52 text-center"
                                value={newReview.rating}
                                onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                            >
                                <option calue="1">1</option>
                                <option calue="2">2</option>
                                <option calue="3">3</option>
                                <option calue="4">4</option>
                                <option calue="5">5</option>

                            </select>
                        </label>

                        <label className="w-full ">
                            <span className="text-lg mr-5">
                                Comment
                            </span>
                            <input type="text"
                                value={newReview.comment}
                                className="border-2"
                                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            />
                        </label>
                        <button className='border bg-sky-500 rounded-full py-2 text-black px-5 text-xl'
                            onClick={() => {
                                addNewReview(newReview, restaurantId)
                                setOpenModal(false)
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            }

        </div>
    )
}

export default RestaurantDetail 