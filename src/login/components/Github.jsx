import styled from "styled-components";
import logo from "../../asset/github로고.png" 
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useContext } from "react";
import { MyStore } from "../../store/myStore";

const Github = ({setLoginModal}) => {

const { setUser } = useContext(MyStore)

const provider = new GithubAuthProvider();

const onClickGithub = () => {
signInWithPopup(auth, provider)
.then((result) => {
    const user = result.user;
    console.log('user: ', user);
    alert('로그인 되었습니다✨')
    setLoginModal(false)
}).catch((error) => {
    const errorMessage = error.message;
    const credential = GithubAuthProvider.credentialFromError(error);
    console.log(errorMessage, credential)
});
}

    return(
        <GithubLoginBtn onClick={onClickGithub}>
            <GithubLogo 
            logo={logo}
            />
            <Title>
            Github 로그인
            </Title>
        </GithubLoginBtn>
    )
}

const GithubLoginBtn = styled.div`
width: 86%;
height: 42px;
border-radius: 10px;
background-color: black;
display: flex;
justify-content: space-between;
align-items: center;
padding: 6px 20px 6px 20px;
cursor: pointer;
`
const GithubLogo = styled.div`
width: 30px;
height: 30px;
background-image: url(${props =>props.logo});
background-position: center;
background-size: cover;
`
const Title = styled.div`
color: white;
font-size: 21px;
`

export default Github;