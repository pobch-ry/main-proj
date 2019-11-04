import { Card } from '@pobch-ry/cccomponents'
import React from 'react'
import ReactDOM from 'react-dom'
import Card2 from './Card2'

function App() {
  return (
    <div>
      <Card myColor="colooor">
        Test
        <br />
        Card
        <br />
        Test
      </Card>
      <br />
      <Card2 myColor2="coloooor2">
        Test2
        <br />
        Card222
      </Card2>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
