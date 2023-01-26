import styled from "styled-components"
import { DB } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { onSnapshot, query, orderBy, collection, getFirestore } from "firebase/firestore"
import OrderHistoryBox from "./OrderHistoryBox";

const OrderHistory = ({ setOrderHistoryModal }) => {

    const closeModal = () => {
        setOrderHistoryModal(false)
    }

    const [orderArr, setOrderArr] = useState([])
    // console.log('orderArr: ', orderArr);

    //firebase firestore 가져오기
    const DB = getFirestore()
    const fnOnsnapshot = () => {
        const q = query(collection(DB, "order"), orderBy("createdDate"))

        onSnapshot(q, (state) => {
            setOrderArr([])   // 이상하게 함수 호출이 두번씩돼서 orderArr를 초기화 시켜줬는데 디버깅 해봐도 원인을 정확히 모르겠다.. 한참 고민했는데 흠.. 뭐 덕분에 디버거 쓰는 법 정도는 익힌듯 
            state.docs.map((v) => {
                const updateData = { ...v.data(), id: v.id }
                setOrderArr(prev => [...prev, updateData])
            })
        })
    }
    useEffect(() => {
        fnOnsnapshot();
    }, [])


    return (
        <Wrap onClick={closeModal}>
            <Modal onClick={(e) => { e.stopPropagation() }}>
                {orderArr?.map((order) =>
                    <OrderHistoryBox 
                    key={order.id}
                    order={order} />)}
            </Modal>
        </Wrap>

    )
}

const Wrap = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 20;
background-color: rgba(0,0,0,0.9);
`
const Modal = styled.div`
position: fixed;
top: 20vh;
left: 0;
right: 0;
margin: 0 auto;
width: 27%;
background-color: white;
color: black;
padding: 1rem;
border-radius: 14px;
box-shadow: 0 2px 8px rgb(0 0 0 / 25%);
z-index: 30;
@media (max-width:768px) {
    width: 63%;
}
`
export default OrderHistory;
