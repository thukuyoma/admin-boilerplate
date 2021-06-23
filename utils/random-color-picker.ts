export default function randomColorPicker() {
  const colorsArray = [
    { primary: '#FC9A04', comp: 'white' },
    { primary: '#FC6605', comp: 'white' },
    { primary: '#FCFE04', comp: 'white' },
    { primary: '#349A04', comp: 'white' },
    { primary: '#349A04', comp: 'white' },
  ]
  const color = colorsArray[Math.floor(Math.random() * colorsArray.length)]
  return color
}
