import React from "react";
import { Container } from './index.style'

const News = (props) => {

  const { state } = props.location

  const goBack = () => {
    history.go(-1)
  }

  return (
    <Container>
      <div className="back" onClick={goBack}>
        <svg t="1641971935225" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2478" width="200" height="200"><path d="M738.145103 170.248828 663.234207 95.337931 313.114483 445.457655 312.937931 445.298759 238.768552 519.450483 238.945103 519.627034 238.768552 519.785931 313.679448 594.696828 313.838345 594.537931 658.996966 939.696552 733.166345 865.509517 388.007724 520.368552Z" p-id="2479" fill="#6F6F6F"></path></svg>
      </div>
      <div className="top">
        <img src={state.picUrl} />
      </div>
      <div className="mid">
        <h1>{state.title}</h1>
        <p>{state.date}</p>
      </div>
    </Container>
  )
}
export default News