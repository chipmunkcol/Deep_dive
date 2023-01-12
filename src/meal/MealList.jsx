import styled from "styled-components";
import { DUMMY_MEALS } from "../api/api";
import Meal from "./components/Meal";

const MealList = ({setCartList}) => {

    return(
        <Wrap>
            <Container>
                {DUMMY_MEALS.map((meal) => 
                <Meal
                key={meal.id} 
                meal={meal}
                setCartList={setCartList}
                />)}
            </Container>
        </Wrap>
    )
}

const Wrap = styled.div`
position: absolute;
top: 66%;
width: 100%;
@media (max-width: 768px) {
top: 54%;
}
`
const Container = styled.div`
width: 57vw;
margin: 0 auto;
padding: 1rem 2rem;
background-color: white;
color: black;
border-radius: 10px;
`

export default MealList;