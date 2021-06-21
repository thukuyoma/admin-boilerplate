import styled from 'styled-components'
const Styles = styled.div`
  margin-top: ${({ marginTop }) => marginTop && `${marginTop}px`};
  margin-right: ${({ marginRight }) => marginRight && `${marginRight}px`};
  margin-bottom: ${({ marginBottom }) => marginBottom && `${marginBottom}px`};
  margin-left: ${({ marginLeft }) => marginLeft && `${marginLeft}px`};
  .loader,
  .loader:after {
    border-radius: 50%;
    width: ${({ width }) => (width ? `${width}px` : '20px')};
    height: ${({ width }) => (width ? `${width}px` : '20px')};
  }
  .loader {
    margin: 60px auto;
    font-size: ${({ size }) => (size ? `${size}px` : '2px')};
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid #e2e2e2;
    border-right: 1.1em solid #e2e2e2;
    border-bottom: 1.1em solid #e2e2e2;
    border-left: 1.1em solid #0098db;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
const Loader = ({
  width,
  size,
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
  isLoading,
}: {
  width: number
  size?: number
  marginLeft?: number
  marginRight?: number
  marginBottom?: number
  marginTop?: number
  isLoading: boolean
}) => {
  return (
    <>
      {isLoading ? (
        <Styles
          width={width}
          size={size}
          marginLeft={marginLeft}
          marginRight={marginRight}
          marginBottom={marginBottom}
          marginTop={marginTop}
        >
          <div className="loader"></div>
        </Styles>
      ) : null}
    </>
  )
}

export default Loader
