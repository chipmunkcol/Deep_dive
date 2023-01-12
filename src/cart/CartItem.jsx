import styled from "styled-components";

const CartItem = ({Item}) => {
    return(
        <Wrap>
            <ItemBox>
                <Title>{Item.name}</Title>
                <Price>${Item.price}</Price>
            </ItemBox>
            <BtnBox>
                <MinusBtn>-</MinusBtn>
                <PlusBtn>+</PlusBtn>
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
`
const PlusBtn = styled(MinusBtn)`
margin-left: 5px;
`
export default CartItem;