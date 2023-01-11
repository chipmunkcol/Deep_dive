import styled from "styled-components";

const MealInfo = ({meal}) => {
    return(
        <Box>
            <Title>{meal.name}</Title>
            <Desc>{meal.description}</Desc>
            <Price>${meal.price}</Price>
        </Box>
    )
}

const Box = styled.div`
width: 15vw;
@media (max-width: 768px) {
width: 25vw
}
`
const Title = styled.div`
font-size: 18px;
font-weight: 700;
`
const Desc = styled.div`
margin-top: 5px;
`
const Price = styled.div`
color: orange;
font-size: 18px;
font-weight: 700;
margin-top: 5px;
`

export default MealInfo;