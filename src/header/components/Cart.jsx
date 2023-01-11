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
width: 6rem;
height: 4rem;
display: flex;
justify-content: center;
align-items: center;
gap: 2%;
background-color: #411504;
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
font-size: 24px;
@media (max-width: 768px) {
    font-size: 16px;
}
`
const CountBox = styled.div`
width: 1rem;
height: 1rem;
background-color: #8a2b06;
`
const Count = styled.div`
font-size: 24px;
@media (max-width: 768px) {
    font-size: 16px;
}
`

export default Cart;