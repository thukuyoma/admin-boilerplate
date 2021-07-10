// /* eslint-disable react/require-default-props */
// import styled from 'styled-components'
// import React, { SyntheticEvent } from 'react'
// import Loader from 'react-loader-spinner'

// const Styles = styled.div`
//   display: ${(block) => (block ? 'flex' : 'inline-flex')};
//   justify-content: ${({ align }) => align && `${align}`};
//   width: 100%;
//   button {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 10px;
//     background: #0098db;
//     border-radius: 4px;
//     border: 0;
//     outline: none;
//     cursor: pointer;
//     white-space: nowrap;
//     outline: 0;
//     color: #fff;
//     font-weight: bold;
//     min-width: 100px;
//     :hover {
//       color: #fff;
//       background-color: #2083cf;
//       box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
//     }
//   }
// `

// interface ButtonProps {
//   block: boolean
//   title: string
//   onClick: (e: SyntheticEvent) => Promise<unknown> | unknown
//   loading: boolean
//   align: string
//   style?: unknown
//   disabled?: boolean
// }
// export default function Button({
//   block,
//   style = {},
//   title,
//   onClick,
//   loading,
//   align,
//   disabled = false,
// }: ButtonProps) {
//   return (
//     <Styles
//       block={block}
//       align={
//         (align.toLowerCase() === 'left' && 'flex-start') ||
//         (align.toLowerCase() === 'right' && 'flex-end') ||
//         (align.toLowerCase() === 'center' && 'center')
//       }
//     >
//       <button type="button" onClick={onClick} style={style} disabled={disabled}>
//         {title}
//         <span>
//           {loading && (
//             <Loader
//               style={{ marginLeft: '5px' }}
//               type="Oval"
//               color="black"
//               height={15}
//               width={15}
//             />
//           )}
//         </span>
//       </button>
//     </Styles>
//   )
// }
