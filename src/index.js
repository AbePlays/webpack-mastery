import './index.css'

const form = document.getElementById('add-form')
const output = document.getElementById('result')

const foo = 'bar'

function multiply(nums) {
  const result = nums.reduce((acc, num) => acc * num, 1)
  return result
}

function sum(nums) {
  const result = nums.reduce((acc, num) => acc + num, 0)
  return result
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const { first, second } = e.target.elements
  const result = sum([+first.value, +second.value])
  output.innerText = `Total = ${result}`
})
