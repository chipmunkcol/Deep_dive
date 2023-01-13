import { useReducer, useState } from "react";
import Cart from "./cart/Cart";
import Banner from "./components/Banner";
import Introdesc from "./components/Introdesc";
import Header from "./header/Header";
import MealList from "./meal/MealList";
import { MyStore } from "./store/myStore";

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItem = state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItem,
      totalAmount: updatedTotalAmount
    };
  }  
  return defaultCartState;
}

// reducer함수 App 컴포넌트 밖에서 생성
function App() {

const [cartState, dispatch] = useReducer(cartReducer, defaultCartState)

const addItemHandler = (item) => {
  dispatch({type: 'ADD', item: item});
}

const removeItemHandler = (id) => {
  dispatch({type: 'REMOVE', id: id})
}

const [cartModal, setCartModal] = useState(false)
const [cartList, setCartList] = useState([])
// console.log('cartList: ', cartList);

const cartContext = {
  item: cartState.items,
  totalAmount: cartState.totalAmount,
  addItem: (item) => {},
  removeItem: (id) => {},
}

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
