import styled from 'styled-components'

export const Main = styled.div`
    height: calc(100vh - 3.25rem - 2.8rem);
    padding-top: 2.8rem;
    .title {
        position: absolute;
        top: 1.5%;
        left: 50%;
        transform: translate(-50%);
        font-size: 15px;
    }
    .teslaShop {
        img {
            width: 100%;
        }
    }
    .swiper-container {
        width: 100%;
        height: 300px;
        margin: 1rem auto;
        padding-bottom: 8rem;
        text-align: center;
        font-size: 1.5rem;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 3px;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            box-shadow: #6E6E6E 0px 0px 1rem;//将h-shadow,v-shadow设为0px,实现四周阴影
            width: 100%;
        }
    }
    .swiper-slide:nth-child(2n) {
        width: 60%;
    }
    .swiper-slide:nth-child(3n) {
        width: 60%;
    }

`