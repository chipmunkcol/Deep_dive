import styled from "styled-components"
import * as Styled from "../cart/Cart"

const Login = ({setLoginModal}) => {

const closeModal = () => {
    setLoginModal(false)
}

    return(
        <Styled.Wrap onClick={closeModal}>
            <Styled.Modal onClick={(e)=>{e.stopPropagation()}}>
                로그인 하셔야돼요~!
                {/* 구글 로그인 */}
                {/* github 로그인 */}
            </Styled.Modal>
        </Styled.Wrap>
    )
}


export default Login;