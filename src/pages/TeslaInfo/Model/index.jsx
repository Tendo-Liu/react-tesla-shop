import React from "react";
import { Container } from './index.style';

const Model = (props) => {
  // let params = useParams();
  // useEffect(() => {
  //   console.log(params, '-------------------');
  // },[])
  let { state } = props.location
  console.log(state)

  return (
    <Container>
      {state.name}
    </Container>
  )
}

export default Model