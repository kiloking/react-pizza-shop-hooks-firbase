import React from 'react';

import {Navbar} from './Navbar/Navbar'
import {Banner} from './Banner/Banner'
import {Menu} from './Menu/Menu'
import {GlobalStyle} from './Styles/GlobalStyle'
import {FoodDialog} from './FoodDialog/FoodDialog'
import {Order}from './Order/Order'
import {useOpenFood} from './Hooks/useOpenFood'
import {useOrders}from './Hooks/useOrders'
import {useTitle} from './Hooks/useTitle'
import {useAuthentication} from './Hooks/useAuthentication'
import {OrderDialog} from './Order/OrderDialog'
import {useOrderDialog} from './Hooks/useOrderDialog'
function App() {
  //食物分類用 會按照SECTION區分 進化成用載入的
  const openFood = useOpenFood();
  const orders = useOrders()
  const auth = useAuthentication()
  const orderDialog = useOrderDialog()
  useTitle({...openFood , ...orders})
  return (
    <>
      <GlobalStyle/>
      <OrderDialog {...orderDialog} {...orders}/>
      <FoodDialog {...openFood} {...orders}/>
      <Navbar {...auth} />
      <Order {...orders} {...openFood} {...auth} {...orderDialog}/>
      <Banner/>
      <Menu {...openFood} />

      
    </>
  );
}

export default App;
