import React, { useEffect } from "react";
import { Container } from './index.style';
import { useParams } from 'react-router-dom';

const Model3 = () => {
  let params = useParams();
  useEffect(() => {
    console.log(params, '-------------------');
  },[])
  return (
    <Container>
      Model3
    </Container>
  )
}

export default Model3