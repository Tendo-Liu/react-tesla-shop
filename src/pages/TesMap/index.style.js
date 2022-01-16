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

export const Main = styled.div`
    padding-top: 2.8rem;
    .title {
        position: absolute;
        top: 1.5%;
        left: 50%;
        transform: translate(-50%);
        font-size: 15px;
    }
    .search {
        width: 17rem;
        height: 1.8rem;
        background: white;
        position: absolute;
        border-radius: 1rem;
        z-index: 1;
        margin: 1.5rem 0 0 1.5rem; 
        svg {
            width: 0.8rem;
            height: 0.8rem;
            margin-left: 0.8rem;
            margin-top: 0.5rem;
        }
        .searchBar {
            width: 13.8rem;
            margin-left: 0.5rem;
            border: none;
            background: none;
            outline: none;
        }
    }
`