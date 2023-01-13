import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MyStore } from "../../store/myStore";

const CartInfo = ({meal}) => {
const { cartList, setCartList } = useContext(MyStore)
// console.log('cartList: ', cartList);

const [cartNum, setCartNum] = useState(1)
const addCart = () => {
    const ItemIndex = cartList.findIndex((v)=>v.id === meal.id)
    if(ItemIndex === -1) {
        const addItem = {
            id: meal.id,
            name: meal.name,
            count: cartNum,
            price: meal.price
        }
        setCartList(prev => [...prev, addItem])
    } else {
        let copy = [...cartList];
        copy[ItemIndex].count += cartNum;
        setCartList(copy);
    }
}

    return(
        <Box>
            <div>
                <Amount>Amount</Amount>
                <AmountInput 
                type="number"
                value={cartNum}
                min={1}
                onChange={(e)=>{setCartNum(+e.target.value)}} // + 붙여서 문자로 안바뀌게 조정
                />
            </div>
            
            <AddBtn onClick={addCart}>+ Add</AddBtn>
        </Box>
    )
}

const Box = styled.div`
width: 9vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
width: 18vw
}
`
const Amount = styled.span`
font-size: 18px;
font-weight: 700;
`
const AmountInput = styled.input`
width: 31px;
text-align: center;
height: 14px;
margin: 0px 0 5px 5px;
@media (max-width: 768px) {
margin: 0px 0 5px 20px;
}
`
const AddBtn = styled.div`
width: 75px;
height: 32px;
background-color: #8a2b06;
color: white;
border-radius: 18px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
`

export default React.memo(CartInfo);