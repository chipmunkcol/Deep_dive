import { signOut } from 'firebase/auth';
import { useContext, useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import { auth } from '../firebase/firebase';
import { MyStore } from '../store/myStore';

const User = () => {

const { user, setUser } = useContext(MyStore)
const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
const [checkMove, setCheckMove] = useState({x: 0, y: 0});
const [LogoutModal, setLogoutModal] = useState(false)

const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });

    setTimeout(() => {
    setCheckMove({x: data.x, y: data.y})
    }, 500);
}

const Logout = () => {
    signOut(auth).then(() => {
        setUser(null)
    })
}
    return(
        <Draggable 
        onDrag={(e, data) => {trackPos(data); e.preventDefault();}}>
        <ProfileImg
        profile={user.userPhoto}
        onClick={() => {
            if(position.x === checkMove.x) {
                setLogoutModal(prev => !prev)
            }
        }}
        >
        {LogoutModal && 
            <LogoutBox onClick={Logout}>Logout</LogoutBox>}
            
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
right: 19%;
bottom: 10%;
cursor: pointer;
`

const LogoutBox = styled.div`
width: 64px;
height: 26px;
background-color: #8a2b06;
border-radius: 10px;
margin: 54px 0px 0 -6px;
text-align: center;
`

export default User;