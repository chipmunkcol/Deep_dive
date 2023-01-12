import { useState } from "react";
import Cart from "./cart/Cart";
import Banner from "./components/Banner";
import Introdesc from "./components/Introdesc";
import Header from "./header/Header";
import MealList from "./meal/MealList";

function App() {

const [cartModal, setCartModal] = useState(false)
const [cartList, setCartList] = useState([])
console.log('cartList: ', cartList);

  return (
    <>
      <Header setCartModal={setCartModal}/>
      <Banner />
      <Introdesc />
      <MealList setCartList={setCartList}/>
      {cartModal && <Cart setCartModal={setCartModal} cartList={cartList} setCartList={setCartList}/> }
    </>
  );
}

export default App;
