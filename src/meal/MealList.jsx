import styled, { keyframes } from "styled-components";
import { DUMMY_MEALS } from "../api/api";
import Meal from "./components/Meal";

const MealList = () => {

    return(
        <Wrap>
            <Container>
                {DUMMY_MEALS.map((meal) => 
                <Meal
                key={meal.id} 
                meal={meal}
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
const slideUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(2rem);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const Container = styled.div`
width: 57vw;
margin: 0 auto;
padding: 1rem 2rem;
background-color: white;
color: black;
border-radius: 10px;
animation: ${slideUp} 500ms ease-out forwards;
`

export default MealList;