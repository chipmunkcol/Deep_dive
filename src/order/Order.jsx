import React, { useContext, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import styled from 'styled-components';
import { postFB } from '../firebase/firebase';
import Login from '../login/Login';
import { MyStore } from '../store/myStore';

const Order = ({ orderClick, setOrderClick }) => {

    const { user, cartList, setCartList } = useContext(MyStore)
    const [address, setAddress] = useState("")
    const [tel, setTel] = useState("")
    const [LoginModal, setLoginModal] = useState(false)
    const [orderLoad, setOrderLoad] = useState(false)

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

    // form 제출
    const onSubmit = async (e) => {
        e.preventDefault({ passive: false });
        const order = {
            order: cartList,
            address,
            tel,
            createdDate: Date(),
            uid: user.uid
        }
        console.log(order)
        setOrderLoad(true) //보여주기식 로딩~.~

        // FB 저장 (firebase에서 export)
        const res = await postFB(order) // boolean으로 결과 return해줬음
        if (res) {
            setTimeout(() => {
                setCartList([])
                setOrderClick(false)
                setOrderLoad(false)
            }, 1000);
        } else {
            alert('새로고침 후 다시 시도해주세요!ㅠㅠ')
            setOrderLoad(false)
        }

    }


    const orderOpen = () => {
        if (user) {
            setOrderClick(true)
        } else {
            setLoginModal(true)
        }
    }

    const OrderLoading = () => {
        return <h2 style={{ color: 'black' }}>결제 중 입니다~.~</h2>
    }

    return (
        <>
            {!orderClick &&
                <OrderBtn onClick={orderOpen}>order</OrderBtn>
            }

            {LoginModal && <Login setLoginModal={setLoginModal} />}

            {orderClick &&
                <>
                    <P style={{ color: 'gray' }}>로그인 해주셔서 감사합니다{':)'} <br /> 
                    진짜 주문은 안되니 가볍게 입력해주세요😍
                    </P>
                    <form onSubmit={onSubmit}>
                        <div>
                            <Input
                                type=""
                                placeholder="주소를 입력해주세요"
                                required
                                value={address}
                                onChange={(e) => { setAddress(e.target.value) }}
                            />
                            <Button type='button' onClick={openPostcode}>우편번호 찾기</Button>
                        </div>

                        <Input
                            type="tel"
                            placeholder="연락받으실 전화번호를 입력해주세요"
                            required
                            minLength={10}
                            onChange={(e) => { setTel(e.target.value) }}
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
const P = styled.p`
@media (max-width: 768px){
    font-size: 12px;
}
`
const Input = styled.input`
width: 60%;
height: 20px;
margin-top: 10px;
@media (max-width: 768px){
width: 92%;
margin-left: 5px;
}
`

const Button = styled.button`
width: 116px;
height: 25px;
margin-left: 5px;

@media (max-width: 768px){
margin-top: 1px;
}

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