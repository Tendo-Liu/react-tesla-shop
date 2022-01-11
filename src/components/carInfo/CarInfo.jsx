import React from "react";
import { Container } from "./CarInfo.style";

const CarInfo = (props) => {
    let { res } = props
    return (
        <Container>
            <div className='carInfo'>
                <span>
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp;{res.battery}&nbsp;<a>公里</a></h1>
                    <h2>&nbsp;&nbsp;&nbsp;续航里程（预估)</h2>
                </span>
                <span style={{ width: '6rem' }}>
                    <h1>&nbsp;&nbsp;{res.speedUp}&nbsp;<a>秒</a></h1>
                    <h2>百公里加速*</h2>
                </span>
                <span>
                    <h1>{res.higtSpeed}&nbsp;<a>公里/小时</a></h1>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最高车速+</h2>
                </span>
            </div>
        </Container>
    )
}
export default CarInfo