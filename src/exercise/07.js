// Production performance monitoring
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'
import { Profiler } from 'react'
// 🐨 you're going to need the reportProfile function
// 💰 here, let me help you with that...
import reportProfile from '../report-profile'
import {unstable_trace as trace} from 'scheduler/tracing'

function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () => {
    trace('click', performance.now(), () => {
      setCount(c => c + 1)
    })
  }
  return <button onClick={increment}>{count}</button>
}

function App() {
  return (
    <div>
      {/*
      🐨 Wrap this div in a React.Profiler component
      give it the ID of "counter" and pass reportProfile
      to the onRender prop.
      */}
      <Profiler id="Counter" onRender={reportProfile}>
        <div>
          Profiled counter
          <Counter />
        </div>
      </Profiler>
      <div>
        Unprofiled counter
        <Counter />
      </div>
    </div>
  )
}

export default App
