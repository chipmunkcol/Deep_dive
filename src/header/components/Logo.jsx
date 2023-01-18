import styled from "styled-components";

const Logo = () => {
    return(
        <MainLogo>
            ReactMeals
        </MainLogo>
    )
}

const MainLogo = styled.div`
font-size: 36px;
cursor: pointer;
@media (max-width: 768px) {
    font-size: 24px;
}
`

export default Logo;