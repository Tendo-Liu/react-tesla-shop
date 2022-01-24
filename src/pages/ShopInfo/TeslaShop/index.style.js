import styled from "styled-components"

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
    .back {
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        margin: 0.8rem 0 0 1rem;
        svg {
            width: 1.2rem;
            height: 1.2rem;
        }
    }
    .shop-header {
        position: fixed;
        width: 100%;
        z-index: 10;
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        .shop-header-left {
            svg {
                width: 6.4rem;
                padding-right: 0.8rem;
            }
            span {
                padding: 0 0.8rem;
                font-size: 14px;
            }
        }
        .shop-header-right {
            margin-left: auto;
            padding-right: 2.8rem;
            display: flex;
            svg {
                width: 1.5rem;
                padding-right: 2.5rem;
            }
            span {
                margin-top: 0.25rem;
                font-size: 14px;
            }
        }
    }
    .charge {
        width: 100%;
        height: 75vh;
        background-image: url('https://www.tesla.cn/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/hero-carousel/wall-connector-gen3-mobile.jpg');
        background-size: 100% 100%;
        position: relative;
        .charge-text {
            position: absolute;
            text-align: center;
            top: 25%;
            left: 0;
            width: 100%;
            color: white;
            h1 {
                line-height: 1.8rem;
                font-size: 17px;
                letter-spacing: 1.5px;
                font-weight: normal;
            }
            h2 {
                font-size: 1.6rem;
                font-weight: normal;
            }
        }
    }
    .section-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 1.5rem;
        h3 {
            font-size: 13px;
            font-weight: bold;
            letter-spacing: 1.5px;
        }
        a {
            font-size: 12px;
            font-weight: normal;
            color: #666666;
        }
    }
    .goodsList {
        .goods {
            position: relative;
            padding: 0 1.2rem 1rem 1.2rem ;
            img {
                width: 100%;
                height: 26rem;
            }
            .goodsName {
                z-index: 2;
                position: absolute;
                top: 35%;
                left: 50%;
                transform: translate(-50%,-50%);
                font-size: 18px;
                font-weight: normal;
            }
        }
    }
`