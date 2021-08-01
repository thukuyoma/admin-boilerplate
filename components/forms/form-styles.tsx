import styled from 'styled-components'

const Control = styled.div`
  width: 100%;
  margin-bottom: 20px;
`
const InputTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 10px;
`

const InputField = styled.input`
  border: 1px solid #ced4da;
  box-sizing: border-box;
  border-radius: 3px;
  height: 35px;
  padding: 10px 10px;
  width: 100%;
  background: inherit;
  font-family: inherit;
  :focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
  }
  :hover {
    background: #f0f0f0;
  }
`
const TextArea = styled.textarea`
  border: 1px solid #ced4da;
  box-sizing: border-box;
  border-radius: 3px;
  height: 100px;
  padding: 10px 10px;
  width: 100%;
  background: inherit;
  font-family: inherit;
  :focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
  }
  :hover {
    background: #f0f0f0;
  }
`

const Must = styled.span`
  color: red;
`

const TagItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  > * {
    &:last-child {
      margin-right: 0px;
    }
  }
`
const TagItem = styled.div`
  background: #fdf5ed;
  border-radius: 50px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  margin: 10px 5px;
  font-size: 12px;
  white-space: wrap;
`

const SquareTagItem = styled.div`
  background: #fdf5ed;
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  margin: 10px 5px 10px 0;
  font-size: 12px;
  white-space: wrap;
`

const TagInputWrapper = styled.div`
  display: flex;
  align-items: center;
`
const AddTagButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  border-radius: 20px;
  flex-shrink: 0;
  background-color: #0098db;
  outline: 0;
  border: 0;
  font-size: 17px;
  color: #fff;
  cursor: pointer;
  :hover {
    background: #33ade2;
  }
`

const RemoveTagButton = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  outline: 0;
  border: 0;
  background: inherit;
  margin: 0;
  padding: 0;
  margin-left: 10px;
  width: 30px;
  height: 30px;
  font-size: 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-right: -20px;
  color: #797777;
  :hover {
    background: #ede9e4;
  }
`

const customReactSelectStyles = (error) => {
  return {
    control: (provided, state) => ({
      ...provided,
      boxSizing: 'border-box',
      outline: 'none',
      boxShadow: state.isFocused && '0 0 0 0.1rem #f28da0',
      // boxShadow: state.isFocused && ' 0 0 0 0.1rem rgb(0 123 255 / 25%)',
      borderRadius: '5px',
      borderWidth: '1px',
      borderColor: '#ced4da',
      // borderColor: state.isFocused ? '#ced4da' : error ? 'red' : '#80bdff',
      height: '35px',
      padding: state.isFocused ? '0' : '0',
      '&:hover': 'none',
    }),
    menu: (base) => ({
      ...base,
      fontSize: '14px',
    }),
    valueContainer: (base) => ({
      ...base,
      position: 'none',
      height: '28px',
    }),
    input: (base) => ({
      ...base,
      position: 'none',
      height: '28px',
      padding: '0',
    }),
    indicatorContainer: (base) => ({
      ...base,
      height: '28px',
    }),
  }
}

const ImageWrapper = styled.div`
  width: 100%;
  height: 100px;
  background: #dae9fc;
  border-radius: 5px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const AddImageIcon = styled.div`
  font-size: 20px;
`
const AddImageText = styled.p`
  margin: 0;
  font-size: 14px;
`
const ChangeImageButton = styled.div`
  width: 100%;
  background: #9d9d9d;
  border-radius: 3px;
  height: 39px;
  border: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: #fff;
  justify-content: center;
  padding: 0 10px;
  cursor: pointer;
  :hover {
    background: #d6d6d6;
  }
`

const ChangeImageButtonIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  font-size: 20px;
  flex-shrink: 0;
`

const ImageDetailsControl = styled.div`
  margin-bottom: 20px;
`

const ImagePreview = styled.img`
  width: 100%;
  height: 132px;
  cursor: pointer;
`

const RemoveImageButton = styled(ChangeImageButton)`
  // margin-left: 10px;
`
const RemoveImageButtonIcon = styled(ChangeImageButtonIcon)``

export {
  Control,
  InputTitle,
  InputField,
  Must,
  TagItemWrapper,
  TagItem,
  TagInputWrapper,
  AddTagButton,
  RemoveTagButton,
  customReactSelectStyles,
  ImageWrapper,
  AddImageIcon,
  AddImageText,
  ChangeImageButton,
  ChangeImageButtonIcon,
  ImageDetailsControl,
  ImagePreview,
  RemoveImageButton,
  RemoveImageButtonIcon,
  SquareTagItem,
  TextArea,
}
