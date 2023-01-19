import { useContext, useEffect } from "react";
import styled from "styled-components";
import { MyStore } from "../store/myStore";

const Order = ({v}) => {
    return(
        <>
        <div>{v.name}</div>
        </>
    )
}
// 밑에 order내역만 컴포넌트로 추리자

const OrderHistoryBox = ({ order }) => {

const {user} = useContext(MyStore)
const orderItem = order?.order
const countTotalAmount = () => {
    let count = 0;
    for(let i=0; i<orderItem.length; i++) {
        count += orderItem[i].count * orderItem[i].price
    }
    return count;
}

const totalAmount = countTotalAmount()
// useEffect(()=>{
//     countTotalAmount()
// },[])

    return (
        <>
        { order.uid === user.uid &&
        <Container>
            <OrderItem>
                {orderItem.map((v) => <Order v={v}/>)}
            </OrderItem>
            <TotalAmount>{totalAmount.toFixed(2)}</TotalAmount>
            <Address>{order.address}</Address>
            <CreatedDate>{order.createdDate}</CreatedDate>
            <Tel>{order.tel}</Tel>
        </Container>}
        </>
    )
}

const Container = styled.div`
width: 95%;
border-bottom: 1px solid black;
`
const OrderItem = styled.div``
const TotalAmount = styled.div``
const Address = styled.div``
const CreatedDate = styled.div``
const Tel = styled.div``

export default OrderHistoryBox;