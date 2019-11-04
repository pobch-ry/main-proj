import { Card } from '@pobch-ry/cccomponents'
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div>
      <Card>
        Test
        <br />
        Card
        <br />
        Test
      </Card>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
