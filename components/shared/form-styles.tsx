import styled from 'styled-components'

const Control = styled.div`
  width: 100%;
  margin-bottom: 20px;
  min-height: 92px;
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
  box-shadow: ${({ error }) => error && '0 0 0 0.1rem #f28da0'};
  :focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgb(0 123 255 / 25%);
  }
  :hover {
    background: #f0f0f0;
  }
`

const InputError = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 10px;
  display: flex;
  align-items: center;
`
const Must = styled.span`
  color: red;
`
const ErrorIcon = styled.span`
  color: red;
  display: flex;
  align-items: center;
  margin-right: 5px;
`

const TagItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  > * {
    &:first-child {
      margin-left: 0px;
    }
  }
  > * {
    &:last-child {
      margin-right: 0px;
    }
  }
`
const TagItem = styled.div`
  height: 30px;
  background: #fdf5ed;
  border-radius: 50px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  margin: 10px 5px;
  font-size: 12px;
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
  margin-right: -10px;
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

export {
  Control,
  InputTitle,
  InputField,
  InputError,
  Must,
  ErrorIcon,
  TagItemWrapper,
  TagItem,
  TagInputWrapper,
  AddTagButton,
  RemoveTagButton,
  customReactSelectStyles,
}
