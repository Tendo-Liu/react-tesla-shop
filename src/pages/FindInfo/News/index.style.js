import styled from "styled-components"

export const Container = styled.div`
    z-index: 2222;
    position: fixed;
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
    .top {
        height: 50%;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
    .mid {
        padding: 1.5rem;
        h1 {
            font-size: 24px;
            font-weight: normal;
        }
        p {
            font-size: 14px;
            color: #C4C4C4;
            font-weight: bold;
        }
    }
`