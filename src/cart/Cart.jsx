import { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { MyStore } from "../store/myStore";
import CartItem from "./CartItem";

const Cart = () => {

const { cartList, setCartModal } = useContext(MyStore)

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
        <Wrap onClick={ModalClose}>
            <Modal onClick={(e)=>{e.stopPropagation()}}>
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
            </Modal>
        </Wrap>
    )
}

const Wrap = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 20;
background-color: rgba(0, 0, 0, 0.75);
`

const slide = keyframes`
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
`
const Modal = styled.div`
position: fixed;
top: 20vh;
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
const TotalAmount = styled.div`
display: flex;
justify-content: space-between;
`
const Amount = styled.div`
font-size: 30px;
font-weight: 700;
`
const Price = styled(Amount)`

`


export default Cart;