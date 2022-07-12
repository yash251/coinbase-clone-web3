import React from 'react'
import styled from 'styled-components'

const Portfolio = () => {
  return (
    <Wrapper>
        <PortfolioTable>
            <TableItem>
                <Title>Your Assets</Title>
            </TableItem>
        </PortfolioTable>
    </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`
const Content = styled.div`
    width: 100%;
    max-width: 1000px;
    padding: 2rem 1rem;
`
const PortfolioTable = styled.div`
    margin-top: 1rem;
    border: 1px solid #282b2f;
`
const Table = styled.table`
    width: 100%;
`
const TableRow = styled.tr`
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > th {
        text-align: left;
    }
`
const TableItem = styled.div`
    padding: 1rem 2rem;
`
const Divider = styled.div`
    border-bottom: 1px solid #282b2f;
`
const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`