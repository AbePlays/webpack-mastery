import './index.scss'

const form = document.getElementById('add-form') as HTMLFormElement
const output = document.getElementById('result') as HTMLOutputElement

const foo = 'bar'

function multiply(nums: number[]) {
  const result = nums.reduce((acc, num) => acc * num, 1)
  return result
}

function sum(nums: number[]) {
  const result = nums.reduce((acc, num) => acc + num, 0)
  return result
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const first = +(e.target as HTMLFormElement)['first'].value
  const second = +(e.target as HTMLFormElement)['second'].value
  const result = sum([first, second])
  output.innerText = `Total = ${result}`
})
