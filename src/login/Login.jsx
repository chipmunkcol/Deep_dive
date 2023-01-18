import styled from "styled-components"
import * as Styled from "../cart/Cart"
import Github from "./components/Github"

const Login = ({setLoginModal}) => {

const closeModal = () => {
    setLoginModal(false)
}

    return(
        <Styled.Wrap onClick={closeModal}>
            <Styled.Modal onClick={(e)=>{e.stopPropagation()}}>
                <Desc> 주문은 로그인이 필요합니다🙋‍♀️ </Desc>
                {/* 구글 로그인 */}
                
                {/* github 로그인 */}
                <Github setLoginModal={setLoginModal}/>

            </Styled.Modal>
        </Styled.Wrap>
    )
}

const Desc = styled.div`
text-align: center;
margin-bottom: 5px;
`

export default Login;