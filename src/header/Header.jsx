import styled from "styled-components";
import Cart from "./components/Cart";
import Logo from "./components/Logo";

const Header = ({setCartModal}) => {
    return(
        <Wrap>
            <Logo />
            <Cart setCartModal={setCartModal}/>
        </Wrap>
    )
}

const Wrap = styled.div`
position: fixed;
top: 0;
left: 0;
width: 80%;
height: 5rem;
background-color: #8a2b06;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 10%;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
z-index: 10;
@media (max-width: 768px) {
    height: 4rem;
}

`

export default Header;