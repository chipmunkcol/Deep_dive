import React, { useContext } from "react";
import styled from "styled-components";
import { MyStore } from "../store/myStore";

const CartItem = ({Item}) => {
    
const { cartList, setCartList } = useContext(MyStore)
// console.log('cartList: ', cartList);

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
                <Flex>
                    <Price>${Item.price}</Price>
                    <Count>x{Item.count}</Count>
                </Flex>
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
/* height: 10vh; */
display: flex;
justify-content: space-between;
border-bottom: 3px solid #8a2b06;
@media (max-width: 768px) {
/* height:  */
}
`
const ItemBox = styled.div`
margin: 5px 0px 15px 0px;
@media (max-width: 768px) {
margin: 0 0 9px 0px;
}
`

const Title = styled.div`
font-size: 24px;
font-weight: 700;
@media (max-width: 768px) {
font-size: 18px;
margin-top: 10px;
}
`
const Flex = styled.div`
display: flex;
margin-top: 5px;
`
const Price = styled.div`
font-weight: 700;
color: #8a2b06;
`
const Count = styled.div`
width: 30px;
height: 20px;
border: 1px solid gray;
border-radius: 8px;
margin-left: 1vw;
display: flex;
justify-content: center;
align-items: center;
`
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