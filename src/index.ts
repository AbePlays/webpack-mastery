import './index.scss'

const form = document.getElementById('add-form') as HTMLFormElement
const output = document.getElementById('result') as HTMLOutputElement

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const first = +(e.target as HTMLFormElement)['first'].value
  const second = +(e.target as HTMLFormElement)['second'].value
  const { sum } = await import(/* webpackExports: ["sum"] */ './utils')
  const result = sum([first, second])
  output.innerText = `Total = ${result}`
})
