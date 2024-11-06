import React, { useContext , useState } from 'react'
import './Search.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../../components/FoodItem/FoodItem'
const Search = () => {
    const { food_list } = useContext(StoreContext)
    const [search, setSearch] = useState(food_list)
    
    const Filter=(event)=>{
        setSearch(food_list.filter(f=>f.name.toLowerCase().includes(event.target.value)))
    }



    return (
        <>
            <div className='search-option'>
                <input type="text" placeholder='Search here....' onChange={Filter} />

            </div>
            <div className="search-list food_display-list">
                {
                search.map((item, index) => {
                        {
                          return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                        }

                    })}


            </div>

        </>

    )
}

export default Search
