import styled from 'styled-components'

const Styles = styled.div`
  p {
    font-size: 12px;
    color: gray;
    font-style: italic;
  }
`

export default function TextDisplay({ text }: { text: string }) {
  return (
    <Styles>
      <p>{text}</p>
    </Styles>
  )
}
