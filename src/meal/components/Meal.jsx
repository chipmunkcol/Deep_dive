import styled from "styled-components";
import CartInfo from "./CartInfo";
import MealInfo from "./MealInfo";

const Meal = ({meal, setCartList}) => {
    return(
        <MealItem>
            <MealInfo meal={meal}/>
            <CartInfo meal={meal} setCartList={setCartList}/>
        </MealItem>
    )
}



const MealItem = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 15vh;
border-bottom: 1px solid #ddd4d4;
`

export default Meal;