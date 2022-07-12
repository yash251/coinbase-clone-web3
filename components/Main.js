import React from 'react'
import styled from 'styled-components'
import Portfolio from './Portfolio'

const Main = () => {
  return (
    <Wrapper>
        <Portfolio />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
    display: flex;
    max-height: calc(100vh - 64px);
    overflow: scroll;

    & div {
        border-radius: 0.4rem;
    }
`