import { signOut } from 'firebase/auth';
import { useContext, useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import { auth } from '../firebase/firebase';
import { MyStore } from '../store/myStore';

const User = ({OrderHistoryModal, setOrderHistoryModal}) => {

// drabble 로 유저내역 가져가자
const { user, setUser } = useContext(MyStore)
const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
const [checkMove, setCheckMove] = useState({x: 0, y: 0});
const [LogoutOrderHistoryModal, setLogoutOrderHistoryModal] = useState(false)

const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });

    setTimeout(() => {
    setCheckMove({x: data.x, y: data.y})
    }, 500);
}

const Logout = () => {
    signOut(auth).then(() => {
        alert('로그아웃 되었습니다🙌')
        setUser(null)
    })
}


const openOrderHistoryModal = () => {
    setOrderHistoryModal(true)
}
    return(
        <Draggable 
        onDrag={(e, data) => {trackPos(data); e.preventDefault();}}>
        <ProfileImg
        profile={user.userPhoto}
        onClick={() => {
            if(position.x === checkMove.x) {
                setLogoutOrderHistoryModal(prev => !prev)
            }
        }}
        >
        {LogoutOrderHistoryModal && 
        <ModalBox>
            <OrderHistoryBox onClick={openOrderHistoryModal}>주문내역</OrderHistoryBox>
            <LogoutBox onClick={Logout}>Logout</LogoutBox>
        </ModalBox>
        }
        </ProfileImg>
    </Draggable>
    )
}

const ProfileImg = styled.div`
width: 50px;
height: 50px;
background-image: url(${props => props.profile});
background-position: center;
background-size: cover;
border-radius: 25px;
position: fixed;
z-index: 999999;
right: 12%;
bottom: 10%;
cursor: pointer;
`
const ModalBox = styled.div`
width: 72px;
margin: 0px 0 0 -10px;
border-radius: 8px;
background-color: #8a2b06;
`
const OrderHistoryBox = styled.div`
width: 65px;
height: 26px;
border-bottom: 1px solid white;
margin: 59px 0px 0 3px;
text-align: center;
`
const LogoutBox = styled(OrderHistoryBox)`
margin-top: 0px;
border-bottom: none;
`


export default User;