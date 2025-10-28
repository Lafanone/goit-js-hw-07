function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('button.change-color')
const colorValueSpan = document.querySelector('span.color')

changeColorButton.addEventListener('click', handleChangeColor)

function handleChangeColor() {
  const newColor = getRandomHexColor()
  document.body.style.backgroundColor = newColor

  colorValueSpan.textContent = newColor
}