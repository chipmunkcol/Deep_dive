import { useEffect, useState } from "react";
import Cart from "./cart/Cart";
import Banner from "./components/Banner";
import Introdesc from "./components/Introdesc";
import Header from "./header/Header";
import MealList from "./meal/MealList";
import { MyStore } from "./store/myStore";


function App() {

const [cartModal, setCartModal] = useState(false)
const [cartList, setCartList] = useState([])
// console.log('cartList: ', cartList);

  return (
    <>
    <MyStore.Provider value={{cartList, setCartList, setCartModal}}>
      <Header />
      <Banner />
      <Introdesc />
      <MealList/>
      {cartModal && <Cart /> }
    </MyStore.Provider>
    </>
  );
}

export default App;
