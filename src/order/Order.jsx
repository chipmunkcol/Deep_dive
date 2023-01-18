import React, { useEffect, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import styled from 'styled-components';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebase';
import Login from '../login/Login';

const Order = () => {

const [orderClick, setOrderClick] = useState(false)
const [address, setAddress] = useState("")
const [tel, setTel] = useState("")
const [orderLoad, setOrderLoad] = useState(false)
const [userLogin, setUserLogin] = useState(null)
const [LoginModal, setLoginModal] = useState(false)

// react 주소 가져오기 api 라이브러리
const open = useDaumPostcodePopup(postcodeScriptUrl)
const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setAddress(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };
const openPostcode = () => {
    open({ onComplete: handleComplete })
}

const onSubmit = (e) => {
    e.preventDefault();
    const order = {
        address,
        tel
    }
    console.log(order)
    setOrderLoad(true)
    setTimeout(() => {
        setOrderLoad(false)
    }, 1000);
}


const orderOpen = () => {
    // if 유저가 가입해야
    if(userLogin) {
    setOrderClick(true)
    } else {
        setLoginModal(true)
    }
    // else 로그인 창 띄우자
}

useEffect(()=>{
onAuthStateChanged(auth, (user) => {
    if (user) {
    const uid = user.uid;
    console.log('uid: ', uid);
    setUserLogin(uid);
    }
});
},[])


const OrderLoading = () => {
    return <h2 style={{color:'black'}}>결제 중 입니다~.~</h2>
}

    return(
        <>
        { !orderClick &&
            <OrderBtn onClick={orderOpen}>order</OrderBtn>
        }

        {LoginModal && <Login setLoginModal={setLoginModal}/>}
        
        { orderClick &&
            <>
            <h4>진짜 주문은 안돼요..ㅎㅎ 가볍게 입력해주세요😍</h4>
            <form onSubmit={onSubmit}>
            <div>
                <Input
                type=""
                placeholder="주소를 입력해주세요"
                required
                value={address}
                onChange={(e)=>{setAddress(e.target.value)}}
                />
                <Button type='button' onClick={openPostcode}>우편번호 찾기</Button>
            </div>
            
            <Input
            type="tel"
            placeholder="연락받으실 전화번호를 입력해주세요"
            required
            minLength={10}
            onChange={(e)=>{setTel(e.target.value)}}
            value={tel}
            />
            <OrderBtn 
            type='submit'
            >
            order
            </OrderBtn>
            {orderLoad && <OrderLoading />}
        </form>
        </>
        }

        
        </>
    )
}

const Input = styled.input`
width: 60%;
height: 20px;
margin-top: 10px;
`

const Button = styled.button`
width: 116px;
height: 25px;
margin-left: 5px;
`
const OrderBtn = styled.button`
width: 76px;
height: 35px;
background-color: #8a2b06;
color: white;
border: none;
border-radius: 10px;
margin-top: 10px;
display: flex;
justify-content: center;
padding-top: 6px;
font-size: 20px;
cursor: pointer;
`

export default Order;