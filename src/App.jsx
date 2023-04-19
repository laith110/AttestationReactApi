import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route,Routes, BrowserRouter as Router} from 'react-router-dom';
import Favorites from './components/favorites/Favorites';
import Description from './components/Description';
import Form from './components/Form';
import React from 'react';


import Basket from './components/basket/Basket';


export const AppContext = React.createContext({})

function App() {

  //для хранения данных туров
const [tyrs,setTyrs] = useState([]); 
//Для избранных туров
const [favorites,setFavorites] = useState([]); 
//для корзины
const [overlayItems,setOverlayItems] = useState([]);
  useEffect(()=>{
    async function axiosData(){
      const tyrsData = 
      await axios.get('https://640a252bd16b1f3ed6e7f83e.mockapi.io/tyrs')
      const favoritesData = 
      await axios.get('https://640a252bd16b1f3ed6e7f83e.mockapi.io/tyrs')
      const cartData = 
      await axios.get('https://640a252bd16b1f3ed6e7f83e.mockapi.io/tyrs')

      setFavorites(favoritesData.data)
      setOverlayItems(cartData.data)
      setTyrs(tyrsData.data);
    }
      axiosData();

},[])

const deleteItems = (id)=>{
axios.delete('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${findOverlay.id}')
setOverlayItems((objDelete)=>objDelete.filter(item => item.id  !== id))
}


const isAdded=(myId)=>{
  return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId)
}

const isFav=(myId)=>{
  return overlayItems.some((objIsFav)=> objIsFav.myId === myId)
}



  return ( 
    
    <AppContext.Provider 
    value={{
      tyrs, 
      setTyrs,
      overlayItems,
      setOverlayItems,
      favorites,
      setFavorites,
      isAdded,
      isFav
    }
    }>
    <div>

      <Router>
          <Header/>
            <Routes>

                <Route path='/favorites'
                  element={
                      <Favorites
                      favorites={favorites}
                      setFavorites={setFavorites}
                      items={tyrs}
                      overlayItems={overlayItems}
                      setOverlayItem={setOverlayItems}
                      />
                  }
                  />
                <Route path='/'
                  element={
                    <Home
                    item={tyrs}
                    overlayItems={overlayItems}
                    setOverlayItem={setOverlayItems}
                    favorites={favorites}
                    setFavorites={setFavorites}
                    /> 
                  }
                  />
                  <Route path='/description'
                  element={
                    <Description/> 
                  }
                  />

                  <Route path='/cart'
                  element={
                    <Basket
                    totalPrice={
                      overlayItems.reduce((element = overlayItems.length, obj)=> 
                      element+obj.price,0
                      )
                    }
                    overlayProp={overlayItems}
                    deleteItems={deleteItems}
                    /> 
                  }


                />

                  <Route path='/form'
                  element={
                    <Form/> 
                  }
                  />
         </Routes>
      </Router>

      <Footer/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
