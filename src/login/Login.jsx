import styled, { keyframes } from "styled-components"
import * as Styled from "../cart/Cart"
import Github from "./components/Github"

const Login = ({setLoginModal}) => {

const closeModal = () => {
    setLoginModal(false)
}

    return(
        <Styled.Wrap onClick={closeModal}>
            <Modal onClick={(e)=>{e.stopPropagation()}}>
                <Desc> 주문은 로그인이 필요합니다🙋‍♀️ </Desc>
                
                {/* github 로그인 */}
                <Github setLoginModal={setLoginModal}/>

            </Modal>
        </Styled.Wrap>
    )
}

const slide = keyframes`
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
`
const Modal = styled.div`
position: fixed;
top: 10vh; // order클릭하면 조금 올리자
left: 0;
right: 0;
margin: 0 auto;
width: 30%;
background-color: white;
color: black;
padding: 1rem;
border-radius: 14px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
z-index: 30;
animation: ${slide} 300ms ease-out forwards;
@media (max-width: 768px){
    width: 87%;
}
`
const Desc = styled.div`
text-align: center;
margin-bottom: 5px;
`

export default Login;