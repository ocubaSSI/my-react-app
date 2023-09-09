import React from "react";
import styled from 'styled-components'


export default function FlexBox() {

  return(
    <Container>
      <p> Flexbox </p>

      <ContainerFlex>

        <Box 
          style={{ backgroundColor: '#A7C957' }}
        >
          Box 1 
        </Box>

        <Box
          style={{ backgroundColor: '#BC4749' }}
        >
          Box 2
        </Box>

        <Box
          style={{ backgroundColor: '#F4E285' }}
        >
          Box 3
        </Box>

        <Box
          style={{ backgroundColor: '#343633' }}
        >
          Box 4
        </Box>
      </ContainerFlex>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center; 
`

  const ContainerFlex = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  `

  const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;

    height: 500px;
    width: 100px;

    &:hover {
      background-color: black;
      color: white;
      cursor: pointer;
    }   
  `