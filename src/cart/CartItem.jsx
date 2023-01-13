import React, { useContext } from "react";
import styled from "styled-components";
import { MyStore } from "../store/myStore";

const CartItem = ({Item}) => {
    
const { cartList, setCartList } = useContext(MyStore)
console.log('cartList: ', cartList);

const index = cartList.findIndex((v) => v.id === Item.id)

const addItem = () => {
    let copy = [...cartList]
    copy[index].count += +1;
    setCartList(copy);
}

const deleteItem = () => {
    
    if(cartList[index].count !== 1) {
        let copy = [...cartList]
        copy[index].count -= +1;
        setCartList(copy)
    } else {
        let copy = [...cartList];
        copy.splice(index, 1)
        setCartList(copy)
    }
}

    return(
        <Wrap>
            <ItemBox>
                <Title>{Item.name}</Title>
                <Price>${Item.price}</Price>
                <Count>{Item.count}</Count>
            </ItemBox>
            <BtnBox>
                <MinusBtn onClick={deleteItem}>-</MinusBtn>
                <PlusBtn onClick={addItem}>+</PlusBtn>
            </BtnBox>
        </Wrap>
    )
}

const Wrap = styled.div`
width: 100%;
height: 10vh;
display: flex;
justify-content: space-between;
border-bottom: 3px solid #8a2b06;
`
const ItemBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const Title = styled.div`
font-size: 24px;
font-weight: 700;
`
const Price = styled.div`
font-weight: 700;
color: #8a2b06;
`
const Count = styled.div``
const BtnBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const MinusBtn = styled.div`
width: 40px;
height: 25px;
border: 2px solid #8a2b06;
border-radius: 10px;
text-align: center;
cursor:pointer;
`
const PlusBtn = styled(MinusBtn)`
margin-left: 5px;
`

export default CartItem;