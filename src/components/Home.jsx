import React from 'react'
import Slider from "./Slider";
import CartItem from './cart/CartItem';
import '../App.css';
import style from '../style.css';
import Footer from './Footer';

const Home = (props) => {
  return (
    <div>
    <div className='row row-col-cols1  '>
      <Slider/>
      </div>
      <br/>
      <div>
      <CartItem item={props.item}
      overlayItems={props.overlayItems}
      setOverlayItems={props.setOverlayItems}
      favorites={props.favorites}
      setFavorites={props.setFavorites}
      />
      </div>
      </div>
      
    
  )
}

export default Home
