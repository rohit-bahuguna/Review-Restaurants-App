
const MenuCard = ({ item  , restaurantName }) => {
    const {name , id , imgSrc , price  , qty } = item
    return (
        <div className="w-64 pb-5 rounded-xl border gap-5 flex flex-col items-center">
            
         
            <img src={imgSrc} alt={name} className="w-64 rounded-t h-64 hover:cursor-pointer" />
            
            <div className="self-start px-3 flex flex-col gap-1">
                 <p className="text-lg font-semibold">{name }</p>
            <p className="text-gray-500">Rs. {price} for {qty}</p>
            <p className="text-gray-500">{ restaurantName}</p>
           </div>
        </div>
    )
}

export default  MenuCard