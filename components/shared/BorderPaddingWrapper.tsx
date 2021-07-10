import styled from 'styled-components'
const BorderPaddingWrapper = styled.div`
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 12px;
  box-shadow: 0 1px 20px 0 rgb(69 90 100 / 8%);
  border: 1px solid #ccc;
  margin-bottom: 30px;
  ${({ padding }) => padding && 'padding: 20px;'}
`
export default BorderPaddingWrapper
