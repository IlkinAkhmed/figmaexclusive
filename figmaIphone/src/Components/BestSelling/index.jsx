import React from 'react'
import './index.scss'
import useFetch from '../../hooks/usefetch'
import { addToBasket } from '../../Slices/basketRedux'
import { useDispatch } from 'react-redux'

function Browse() {
  const { products, isLoading } = useFetch('exclusive')
  const dispatch = useDispatch()
  return (
    <section id='selling'>

      <div className="head-of-selling">
        <div className="color"></div>
        <h3>This Month</h3>
      </div>
      <div className="selling-head">
        <h2>Best Selling Products</h2>
        <button>View All</button>
      </div>
      <div className="sellingWrapper">
        {!isLoading ? <h1>Loading...</h1> :
          products && products
            .filter((product) => product.status === 'popular')
            .map(item => (
              <div className='sellingCard' key={item.id}>
                <div className="sellingImg">
                  <i onClick={() => dispatch(addToBasket({ ...item, count: 1, }))} className='fa-solid fa-basket-shopping'></i>
                  <i className='fa-solid fa-eye'></i>
                  <i className='fa-regular fa-heart'></i>
                  <img src={item.image} alt="" />
                </div>
                <div className="sellingCardTexts">
                  <p>{item.name}</p>
                  <span className='newPrice'>${item.newPrice}.00</span>
                  <span className='oldPrice'>${item.oldPrice}.00</span>
                  <div className="rating">
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <i className='fa-solid fa-star'></i>
                    <span>(88)</span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
  )
}

export default Browse