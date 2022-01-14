import styled from "styled-components";

export const Container = styled.div`
    z-index: 2222;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: black;
    opacity: 0.7;
    margin-top: 2.8rem;
`
/* 原因就是半透明元素具有层叠上下文，div的z-index:3333无法穿透。 */
export const SelectBox = styled.div` 
    color: black;
    background: white;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 87%;
    z-index: 3333;
    border-top-left-radius: 1.2rem;
    border-top-right-radius: 1.2rem;
    .carTop {
        padding: 1.5rem;
        font-weight: 600;
        display: flex;
        svg {
            width: 1.1rem;
            height: 1.1rem;
            margin-left: auto;
        }
    }
    .carList {
        padding: 1.5rem;
        padding-top: 0rem;
        font-weight: 600;
        .car, .carChoose {
            display: flex;
            align-items: center;
            padding: 1.2rem 0 1.2rem 1rem;
            border: 1px solid #D0D1D2;
            margin-bottom: 1rem;
            border-radius: 1rem;
            height: 4.5rem;
            img {
                width: 60%;
                margin-left: auto;
            }
        }
        .carChoose {
            border: 3px solid #3E6AE1;
        }
    }
`