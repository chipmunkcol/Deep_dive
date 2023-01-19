import { useContext, useEffect } from "react";
import styled from "styled-components";
import { MyStore } from "../store/myStore";

const Order = ({v}) => {
    return(
        <>
        <div>{v.name} x{v.count}개</div>
        </>
    )
}
// 밑에 order내역만 컴포넌트로 추리자

const OrderHistoryBox = ({ order }) => {

const {user} = useContext(MyStore)

// 주문한 총 합 계산
const orderItem = order?.order
const countTotalAmount = () => {
    let count = 0;
    for(let i=0; i<orderItem.length; i++) {
        count += orderItem[i].count * orderItem[i].price
    }
    return count;
}

const totalAmount = countTotalAmount();

// 주문한 날짜 계산
const date = order.createdDate
const FNdate = () => {
    const updateDate = new Date(date).toLocaleDateString("en-US");
    return updateDate;
}
const updatedDate = FNdate();

    return (
        <>
        { order.uid === user.uid &&
        <Container>
            <CreatedDate>Order date: {updatedDate}</CreatedDate>
            <Tel>[Tel] {order.tel}</Tel>
            <Address>{order.address}</Address>
            <OrderItem>
                {orderItem.map((v) => <Order v={v}/>)}
            </OrderItem>
            <TotalAmount>${totalAmount.toFixed(2)}</TotalAmount>
        </Container>}
        </>
    )
}

const Container = styled.div`
width: 95%;
border-bottom: 1px solid black;
font-size: 14px;
`
const OrderItem = styled.div``
const TotalAmount = styled.div`
color: orange;
width: 64px;
border-bottom: 3px double;
`
const Address = styled.div``
const CreatedDate = styled.div`
font-size: 16px;
font-weight: 700;
`
const Tel = styled.div``

export default OrderHistoryBox;