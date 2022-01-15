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
        span {
            margin-left: 6.5rem;
            font-size: 15px;
        }
        svg {
            width: 1.2rem;
            height: 1.2rem;
        }
    }
    img {
        width: 100%;
        margin-top: 16.5%;
    }
`