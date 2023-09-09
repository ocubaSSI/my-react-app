import React from "react";
import styled from 'styled-components'
import './Home.css'

export default function Home() {

  return(
    <Container>

      <a href="/flex"> Go to Flex </a>

      <p>Home</p>
      
      <div className="box" > Box </div>

      <img
        src={'https://imagizer.imageshack.com/img538/9889/xlMaV6.jpg'}
        className="imageclass"
      /> 

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`