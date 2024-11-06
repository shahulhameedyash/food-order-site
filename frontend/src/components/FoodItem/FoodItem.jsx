
import { FaPlus, FaRegWindowMinimize } from "react-icons/fa";
import './FoodItem.css'
import { useContext } from 'react';
import { StoreContext } from "../../context/StoreContext";


const FoodItem = ({ id, name, price, description, image }) => {
  const {cartItems, addToCart, removeFromCart,url}= useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={url+"/images/"+image} />
        {!cartItems[id]
          ? <div className='add' onClick={() => addToCart(id)}><FaPlus /></div>
          : <div className='food-item-counter'>
            <div className='sub' onClick={() => removeFromCart(id)}><FaRegWindowMinimize /></div>
            <p>{cartItems[id]}</p>
            <div className='add1' onClick={() => addToCart(id)} ><FaPlus /></div>
          </div>
        }
      </div>
      <div className="food-item-info"><h1></h1>
        <p>{name}</p>
        <img src='' />
      </div>
      <p className="food-item-desc">
        {description}
      </p>
      <p className="food-item-price">${price}</p>
    </div>
  )
}

export default FoodItem
