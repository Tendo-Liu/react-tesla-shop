import styled from 'styled-components'

export const Main = styled.div`
    height: calc(100vh - 3.25rem - 2.8rem);
    padding-top: 2.8rem;
    .container {
        padding: 2rem 1.5rem;
    }
    .title {
        position: absolute;
        top: 1.5%;
        left: 50%;
        transform: translate(-50%);
        font-size: 15px;
    }
    .teslaFind {
        img {
            width: 100%;
            border-radius: 1rem;
        }
    }
    .teslaNews {
        .news {
            display: flex;
            align-items: center;
            padding: 1rem 0;
            margin: 1.5rem 0;
            height: 3rem;
            overflow: hidden;
            .newsLeft {
                h1 {
                    font-size: 16px;
                    font-weight: normal;
                }
                p {
                    font-size: 12px;
                    color: #C4C4C4;
                    font-weight: bold;
                }
            }
            img {
                padding-left: 1.5rem;
                width: 30%;
                margin-left: auto;
            }
        }
    }
`