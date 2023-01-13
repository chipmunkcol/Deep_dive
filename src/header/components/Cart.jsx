import { useContext, useEffect, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { MyStore } from "../../store/myStore";

const Cart = () => {

const {setCartModal, cartList} = useContext(MyStore)

const countCartItem = () => {
    let total = 0;
    cartList?.map((v)=> total += v.count)
    return total;
}

const totalItem = countCartItem();

const [animation, setAnimation] = useState(false)

useEffect(()=>{
    setAnimation(true);
    
    setTimeout(() => {
        setAnimation(false)
    }, 300);
},[cartList])

    return(
        <Container
        animation={animation} 
        onClick={()=>{setCartModal(true);}}
        >
            <CartImg />
            <Title>Your Cart</Title>
            <CountBox>
                <Count>{totalItem}</Count>
            </CountBox>
        </Container>
    )
}

const sizeMove = keyframes`
    0% {
        transform: scale(1);
    }
    10% {
        transform: scale(0.9);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }

`

const Container = styled.div`
width: 14rem;
height: 4rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 23px;
gap: 6%;
background-color: #411504;
font-size: 18px;
cursor: pointer;
animation: ${props => props.animation ? sizeMove : null} 0.3s;
@media (max-width: 768px) {
    width: 10rem;
    height: 3rem;
    font-size: 14px;
}
`
const CartImg = styled.div`
/* background-image: url();
background-position: center;
background-size: cover; */
width: 1rem;
height: 1rem;
background-color: teal;
@media (max-width: 768px) {
    /* width:; */
}
`
const Title = styled.div`
`
const CountBox = styled.div`
width: 37px;
height: 28px;
background-color: #8a2b06;
display: flex;
justify-content: center;
align-items: center;
border-radius: 15px;
`
const Count = styled.div`
`

export default Cart;