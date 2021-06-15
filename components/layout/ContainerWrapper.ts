import styled from 'styled-components'

const ContainerMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 450px;
  @media (max-width: 800px) {
    flex-wrap: wrap;
    height: 100%;
    flex-direction: column;
  }
`

export default ContainerMainWrapper
