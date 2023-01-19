import { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import Order from "../order/Order";
import { MyStore } from "../store/myStore";
import CartItem from "./CartItem";

const Cart = () => {

const { cartList, setCartModal } = useContext(MyStore)
const [orderClick, setOrderClick] = useState(false)

const ModalClose = () => {
    setCartModal(false)
}

const calculateTotal = () => {
    let total = 0;
    cartList?.map((v)=> total += v.price * v.count)
    return total
}

const totalAmount = calculateTotal();

    return(
        <Wrap >
            <Modal topPosition={orderClick}>
                <div style={{width:'100%', display:'flex', justifyContent:'flex-end'}}>
                <CloseBtn onClick={ModalClose}>close</CloseBtn>
                </div>

                {cartList.map((Item) => 
                    <CartItem 
                    key={Math.random()}
                    Item={Item}
                    />
                )}

                <TotalAmount>
                    <Amount>Total Amount</Amount>
                    <Price>${totalAmount.toFixed(2)}</Price>
                </TotalAmount>

            {/* 주문 input */}
                {cartList.length !== 0 && 
                    <Order orderClick={orderClick} setOrderClick={setOrderClick}/>}

            </Modal>
        </Wrap>
    )
}

export const Wrap = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 20;
background-color: rgba(0, 0, 0, 0.75);
`

export const slide = keyframes`
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
`
export const Modal = styled.div`
position: fixed;
top: ${props => props.topPosition ? "10vh" : "20vh"}; // order클릭하면 조금 올리자
left: 0;
right: 0;
margin: 0 auto;
width: 50%;
background-color: white;
color: black;
padding: 1rem;
border-radius: 14px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
z-index: 30;
animation: ${slide} 300ms ease-out forwards;
`
const CloseBtn = styled.div`
width: 76px;
height: 32px;
background-color: #8a2b06;
color: white;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
/* padding-top: 3px; */
font-size: 20px;
cursor: pointer;
`
const TotalAmount = styled.div`
display: flex;
justify-content: space-between;
color: orange;
margin-top: 12px;
@media (max-width:768px){
    margin-top: 16px;
}
`
const Amount = styled.div`
font-size: 30px;
font-weight: 700;
@media (max-width: 768px) {
    font-size: 19px;
}
`
const Price = styled(Amount)`
`


export default Cart;