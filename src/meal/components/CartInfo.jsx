import { useState } from "react";
import styled from "styled-components";

const CartInfo = ({meal, setCartList}) => {

const [cartNum, setCartNum] = useState(1)
const addCart = () => {
    for (let i=0; i<cartNum; i++) {
        setCartList(prev => [...prev, meal])
    }
}

    return(
        <Box>
            <div>
                <Amount>Amount</Amount>
                <AmountInput 
                type="number"
                value={cartNum}
                onChange={(e)=>{setCartNum(e.target.value)}}
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

export default CartInfo;