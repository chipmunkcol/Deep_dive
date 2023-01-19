import { useEffect, useState } from "react";
import Cart from "./cart/Cart";
import Banner from "./components/Banner";
import Introdesc from "./components/Introdesc";
import Header from "./header/Header";
import MealList from "./meal/MealList";
import User from "./user/User"
import { MyStore } from "./store/myStore";
import OrderHistory from "./order/OrderHistory";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";


function App() {

const [cartModal, setCartModal] = useState(false)
const [cartList, setCartList] = useState([])
// console.log('cartList: ', cartList);
const [user, setUser] = useState(null)
// console.log('user: ', user);
const [OrderHistoryModal, setOrderHistoryModal] = useState(false)

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
      if(user) {
          console.log(user);
          
          setUser({
            userEmail: user.email, 
            userPhoto: user.photoURL, 
            userId: user.uid
          })
      }
  })
},[])


  return (
    <>
    <MyStore.Provider value={{cartList, setCartList, setCartModal, user, setUser}}>
      <Header />
      <Banner />
      <Introdesc />
      <MealList/>
      {cartModal && <Cart /> }
      {user && <User OrderHistoryModal={OrderHistoryModal} setOrderHistoryModal={setOrderHistoryModal}/>}
      {OrderHistoryModal && <OrderHistory setOrderHistoryModal={setOrderHistoryModal}/>} 
    </MyStore.Provider>
    </>
  );
}

export default App;
