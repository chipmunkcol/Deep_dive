import styled from "styled-components";

const Introdesc = () => {
    return(
        <Container>
            <Box>
                <h2>Delicious Food, Delivered To You</h2>
                <div>Choose your favorite meal from our brand selection 
                    of available meals and enjoy a delicious <br /> lunch or dinner at home.
                </div>
                <div>
                    All our meals are cooked with high-quality ingredients, 
                    just-in-time and of course by <br /> experienced chefs!
                </div>
            </Box>
        </Container>
    )
}
const Box = styled.div`
width: 47vw;
height: 22vh;
margin: 0 auto;
background-color: #383838;
text-align: center;
padding: 1rem;
box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h2{
    margin: 0px 0 0px 0;
}
div{
    margin: 10px 0 0 0;
}

@media (max-width: 768px) {
    height: 12vh;
div{
    display: none;
}
}
`
const Container = styled.div`
position: absolute;
top: 36%;
width: 100%;
height: 23vh;
`

export default Introdesc;