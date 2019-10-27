import React, {useState} from 'react';

import {Navbar} from './Navbar/Navbar'
import {Banner} from './Banner/Banner'
import {Menu} from './Menu/Menu'
import {GlobalStyle} from './Styles/GlobalStyle'
import {FoodDialog} from './FoodDialog/FoodDialog'
import {Order}from './Order/Order'
import {useOpenFood} from './Hooks/useOpenFood'
import {useOrders}from './Hooks/useOrders'
import {useTitle} from './Hooks/useTitle'
function App() {
  //食物分類用 會按照SECTION區分 進化成用載入的
  const openFood = useOpenFood();
  const orders = useOrders()
  useTitle({...openFood , ...orders})
  return (
    <>
      <GlobalStyle/>
      <FoodDialog {...openFood} {...orders}/>
      <Navbar/>
      <Order {...orders}/>
      <Banner/>
      <Menu {...openFood} />

      
    </>
  );
}

export default App;
