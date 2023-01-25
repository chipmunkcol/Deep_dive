import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Meal from "./components/Meal"

const MealList = () => {

const [MealArr, setMealArr] = useState([])
console.log('MealArr: ', MealArr);

// firebase realtime datebase에서 가져오기
const GetMeal = async() => {
    const res = await fetch('https://auth-c1322-default-rtdb.firebaseio.com/meal.json')
    const res2 = await res.json()
    console.log(res2)
    
    for (const key in res2) { // 이 문법 까먹어서 진짜 한참 고생했네.. 요 문법은꼭외워두자ㅠ
      const updatedMeal = {...res2[key], id: key}
      setMealArr(prev => [...prev, updatedMeal])
    }
} 

useEffect(()=>{
    GetMeal()
},[])

    return(
        <Wrap>
            <Container>
                {MealArr?.map((meal) => 
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