import { useContext, useEffect, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { MyStore } from "../../store/myStore";
import 카트이미지 from "../../asset/카트이미지.png"

const Cart = () => {

const {setCartModal, cartList} = useContext(MyStore)
console.log('cartList: ', cartList);

const countCartItem = () => {   // 전체 아이템이 몇개인지 세는 함수
    let total = 0;
    cartList?.map((v)=> total += v.count)
    return total;   //숫자 return 해서 totalItem 변수에 넣음
}

const totalItem = countCartItem();

const [animation, setAnimation] = useState(false)

useEffect(()=>{
if(cartList.length !== 0) {
    setAnimation(true);

    setTimeout(() => {
        setAnimation(false)
    }, 300);
}
},[cartList])

    return(
        <Container
        animation={animation} 
        onClick={()=>{setCartModal(true);}}
        >
            <CartImg 카트이미지={카트이미지}/>
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
    width: 4rem;
    height: 3rem;
    font-size: 14px;
}
`
const CartImg = styled.div`
background-image: url(${props => props.카트이미지});
background-position: center;
background-size: cover;
width: 2rem;
height: 2rem;
/* background-color: teal; */
@media (max-width: 768px) {
width: 1.5rem;
height: 1.5rem;
margin: 0 -4px 0 3px;
}
`
const Title = styled.div`
font-size: 20px;
@media (max-width:768px) {
display: none;
}
`
const CountBox = styled.div`
width: 37px;
height: 28px;
background-color: #8a2b06;
display: flex;
justify-content: center;
align-items: center;
border-radius: 15px;
@media (max-width:768px) {
width: 28px;
}
`
const Count = styled.div`
`

export default Cart;