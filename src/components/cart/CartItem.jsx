import React from 'react'
import Item from './Item'
import axios from 'axios'

  
const CartItem = (props) => {  
  const onAddOverlay = async(obj) => {
    try{
      const findOverlay = props.overlayItems.find(objOver=>objOver.myId === obj.myId)
      if(findOverlay){
        axios.delete('https://640a252bd16b1f3ed6e7f83e.mockapi.io/tyrs/${findOverlay.id}')
        props.setOverlayItems((over)=> over.filter(o=>o.myId !== obj.myId))
      }
      else{
        const {data} = await axios.post('https://640a252bd16b1f3ed6e7f83e.mockapi.io/tyrs',obj)
        props.setOverlayItems([...props.overlayItems,data])
      }
    }

    catch{
      alert('Какая-то ошибка')
    }
  }

  const onAddFav = async(obj) => {
    try{
      const findFavorites = props.favorites.find(objFav=>objFav.myId === obj.myId)
      if(findFavorites){
        axios.delete('https://640a252bd16b1f3ed6e7f83e.mockapi.io/tyrs/${findFavorites.id}')
        props.setFavorites((over)=> over.filter(o=>o.myId !== obj.myId))
      }
      else{
        const {data} = await axios.post('https://640a252bd16b1f3ed6e7f83e.mockapi.io/tyrs',obj)
        props.setFavorites([...props.favorites,data])
      }
    }

    catch{
      alert('Какая-то ошибка')
    }
  }
  return(
<div > 
  { 
      props.item.map(obj=>{
        return(
          <Item 
          key={obj.id}  
          id={obj.id}
          myId={obj.myId}
          title={obj.title}
          description={obj.description}
          price={obj.price}
          img={obj.img}

          favBtn={
            (favObj)=>
              onAddFav(favObj)
          }

          onPlus={(cartObj)=>
          onAddOverlay(cartObj)
          }
           />
        )
      })
  }
  </div>
  )
}

export default CartItem
