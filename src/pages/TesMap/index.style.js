import styled from "styled-components";

export const TeslaMap = styled.div`
    width: 100%;
    height: calc(100vh - 2.8rem);
    .getLocation {
        position: absolute;
        z-index: 1;
        width: 2.5rem;
        height: 2.5rem;
        background: white;
        border-radius: 50%;
        box-shadow: #6E6E6E 0px 0px 4rem;//将h-shadow,v-shadow设为0px,实现四周阴影
        right: 0;
        bottom: 0;
        margin: 0 1.5rem 5rem 0;
        svg {
            width: 1.2rem;
            height: 1.2rem;
            padding: 0.65rem;
        }
    }
`