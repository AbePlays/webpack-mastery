import { createRoot } from 'react-dom/client'
import './index.scss'

const div = document.getElementById('root')

if (div) {
  const root = createRoot(div)
  root.render(<h1>Hello, React!</h1>)
} else {
  throw new Error('Could not find root element')
}
