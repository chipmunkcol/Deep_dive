import styled from "styled-components";

const Cart = () => {
    return(
        <Container>
            <CartImg />
            <Title>Your Cart</Title>
            <CountBox>
                <Count>3</Count>
            </CountBox>
        </Container>
    )
}

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
@media (max-width: 768px) {
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