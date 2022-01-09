import styled from "styled-components";

export const Rotation = styled.div`
  width: 100vw;
  height: 120vh;
  overflow: hidden;
  .rotationChart-img {
    width: 100vw;
    display: inline-block;
  }
  span {
    left: 50%;
    top: 20%;
    transform: translate(-50%);
    position: absolute;
    font-size: 1.5rem;
  }
`