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
    .teslaDrive, .teslaGuideBook{
        text-align: center;
        padding: 1rem 1.7rem 1.5rem 1.7rem;
        h1 {
            font-weight: 500;
            font-size: 26px;
        }
        h2 {
            font-size: 15px;
            font-weight: 400;
        }
        img {
            width: 100%;
            border-radius: 1rem;
            margin-top: 1.5rem;
        }
        .testDrive {
            margin-left: 50%;
            transform: translate(-50%);
            z-index: 1000;
            width: 100%;
            margin-top: 1.5rem;
            line-height: 2.2rem;
            border-radius: 30px;
            border: 3px solid black;
            background: white;
        }
    }
`