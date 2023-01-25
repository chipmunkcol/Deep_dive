import { signOut } from "firebase/auth";
import { useContext, useState } from "react";
import styled from "styled-components";
import { auth } from "../../firebase/firebase";
import { MyStore } from "../../store/myStore";
import Login from "../../login/Login";
import OrderHistory from "../../order/OrderHistory"

const MenuBar = () => {

    const { user, setUser} = useContext(MyStore);
    const [LoginModal, setLoginModal] = useState(false);
    const [OrderHistoryModal, setOrderHistoryModal] = useState(false)

    const handleLogin = () => {
        setLoginModal(true)
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            alert('로그아웃 되었습니다🙌')
            setUser(null)
        })
    }

    const openOrderHistoryModal = () => {
        setOrderHistoryModal(true)
    }

    return (
        <Wrap>
            <Modal>
                {user ?
                    (<>
                        <StyledOrderHistory
                            onClick={openOrderHistoryModal}
                        >주문내역</StyledOrderHistory>
                        <Logout
                            onClick={handleLogout}
                        >로그아웃</Logout>
                    </>) :
                    (
                        <StyledLogin
                            onClick={handleLogin}
                        >로그인</StyledLogin>)
                }

                {LoginModal && <Login setLoginModal={setLoginModal}/>}
                {OrderHistoryModal && <OrderHistory setOrderHistoryModal={setOrderHistoryModal}/>}
            </Modal>
        </Wrap>
    )
}

const Wrap = styled.div`
position: fixed;
top: 4rem;
left: 0;
width: 100%;
height: 100%;
z-index: 20;
background-color: rgba(0, 0, 0, 0.75);
`

const Modal = styled.div`
position: fixed;
top: 4rem;
left: 0;
right: 0;
margin: 0 auto;
width: 100%;
background-color: #8a2b06;
color: white;
border-top: 1px solid gray;
`
const StyledLogin = styled.div`
font-size: 18px;
border-bottom: 1px solid gray;
padding: 8px;
`
const StyledOrderHistory = styled(StyledLogin)``
const Logout = styled(StyledLogin)``

export default MenuBar;