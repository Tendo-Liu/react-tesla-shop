import styled from "styled-components";
import style from '../assets/global-style';

export const Tab = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0; 
  z-index: 1111;
  height: 3.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${style["theme-color-tab"]};
  a {
    flex: 1;
    font-size: 12px;
    color: black;
    text-decoration: none;
    span {
      padding-top: 3px;
      color: #C4C4C4;
    }
    &.selected {
      span {
        font-weight: 600;
        color: #1b1b1b;
      }
    }
  }
`;

export const TabItem = styled.div`
  height: 100%;
  display: flex;
  // 主轴默认为横的，colum为竖的
  flex-direction: column;
  // 主轴
  justify-content: center;
  /* align-items: center;*/
  margin-left: 38%;
  
  img {
    height: 1.5rem;
    width: 1.5rem;
    margin-left: 0.05rem;
    display: inline-block;
  }
`;
