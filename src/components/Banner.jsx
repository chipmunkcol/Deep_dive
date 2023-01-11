import styled from "styled-components";
import 배너이미지 from "../asset/meals.jpg"

const Banner = () => {
    return(
        <Wrap>
            <BannerImg 
            src={배너이미지}
            />
        </Wrap>
    )
}
const Wrap = styled.div`
width: 100%;
overflow: hidden;
`
const BannerImg = styled.img`
width: 110%;
height: 25rem;
object-fit: cover;
transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
`

export default Banner;