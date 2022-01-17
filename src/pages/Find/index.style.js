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
    .container {
        padding: 2rem 1.5rem;
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
                    /* width: 100rem; */
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
                .newsRight {
                    padding-left: 1.5rem;
                    width: 30%;
                    margin-left: auto;
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
    .pullUpLoading {
        position: absolute;
        bottom: 3.25rem;
        left: 50%;
        transform: translate(-50%);
        img {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`