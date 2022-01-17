import styled from "styled-components";

export const Container = styled.div`
    z-index: 2222;
    position: fixed;
    height: calc(100vh - 2.8rem);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: white;
    padding-top: 2.8rem;
    img {
        width: 100vw;
    }
    .back {
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        margin: 0.8rem 0 0 1rem;
        span {
            margin-left: 6.45rem;
            font-size: 15px;
        }
        svg {
            width: 1.2rem;
            height: 1.2rem;
        }
    }
    .topInfo {
        a {
            display: block;
            text-align: center;
            margin-top: 2rem;
            font-size: 25px;
            font-weight: 600;
        }
        span {
            color: #5C5E62;
            font-size: 14px;
            padding: 0.6rem 0;
            display: block;
            text-align: center;
        }
        img {
            padding-top: 5rem;
        }
    } 
    .carInfo {
        position: static;
        color: black;
        padding-top: 1.2rem;
        display: flex;
        justify-content: center;
        span {
            font-size: 11px;
        }
    }
    .chooseCarInfo {
        padding: 3rem 1.6rem 1rem;
        span {
            color: #5C5E62;
            font-size: 14px;
        }
        .carPrice {
            display: flex;
            align-items: center;
            /* 左右水平居中 */
            /* justify-content: center; */
            margin-top: 1rem;
            padding: 1rem 1.2rem;
            border: 3px solid #3E6AE1;
            border-radius: 3rem;
            span {
                color: black;
                font-weight: 700;
            }
            svg {
                /* flex布局让某个子元素靠右显示 */
                margin-left: auto;
                width: 1.2rem;
                height: 1.2rem;
            }
        }
        .carInfoDetail {
            width: 3rem;
            font-size: 12px;
            padding: 0.4rem 3rem;
            border-radius: 1rem;
            background-color: #F4F4F4;
            margin: 2.5rem 27%;
        }
    }
    .chooseCarColor {
        h2 {
            display: block;
            text-align: center;
            margin-top: 2rem;
            font-size: 24px;
            font-weight: 400;
        }
        span {
            margin-left: 50%;
            transform: translate(-50%);
            display: inline-block;
            padding-bottom: 3rem;
            font-size: 14px;
        }
        .carColor, .wheelColor {
            position: relative;
            display: flex;
            justify-content: center;
            padding: 2rem 0 1.5rem 0;
            img {
                margin: 0 0.5rem;
                width: 2.5rem;
                height: 2.5rem;
                /* display: block; */
            }
            .colorImg::before {
                border: 3px solid #4670E2;
                content: "";
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                position: absolute;
                display: block;
                top: 1.57rem;
                margin-left: 0.08rem;
            }
        }
    }
`