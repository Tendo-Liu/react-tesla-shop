import styled from "styled-components";

export const Rotation = styled.div`
  width: 100vw;
  height: calc(120vh - 3.25rem);
  overflow: hidden;
  .rotationChart-img {
    width: 100vw;
    display: inline-block;
  }
  .carName {
    left: 50%;
    top: 20%;
    transform: translate(-50%);
    position: absolute;
    font-size: 1.5rem;
    font-family: initial;
    font-weight: 400;
  }
  .carInfo {
    position: absolute;
    display: flex;
    margin-left: 7%;
    line-height: 5px;
    top: 72%;
    span {
      color: white;
      font-size: 10px;
      width: 8rem;
      a, h2 {
        font-size: 5px;
        font-weight: 400;
      }
    }
  }
  .carBuy {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 999;
    width: 20rem;
    top: 83.5%;
    background-color: #4E4E53;
    line-height: 2.5rem;
    border-radius: 30px;
    color: white;
    border: 0;
  }
  .swiper-pagination {
    top: 93%;
    z-index: 200;
  }
  .swiper-pagination-bullet {
    border-radius: 0px;
    opacity: 0.3;
    width: 1.5rem;
    height: 0.15rem;
    background: white;
    margin: 0.05rem !important;
    border-radius: 1px;
  }
  .swiper-pagination-bullet-active {
    background: white;
    opacity: 1;
  }
`