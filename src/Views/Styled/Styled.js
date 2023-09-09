import React from "react";
import styled from 'styled-components'

export default function Styled() {

  return(
    <Container>

      <Link href="/flex"> Go to Flex </Link>

      <Titulo>Home</Titulo>
      
      <Box className="box" > Box </Box>

      <Imagen
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

const Link = styled.a`
`

const Titulo = styled.p`
`

const Box = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
`

const Imagen = styled.img`
`