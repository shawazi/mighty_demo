import { useState } from 'react'
import './App.css'
import { Box, Button } from "@chakra-ui/react";
import { UnlockIcon, LockIcon } from "@chakra-ui/icons";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>


        <h1>Total Coins: {count}</h1></div>

      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>

      </div>
      <div className="center"><Box bg="teal" w="300%" p={4} color="white" m="auto"><LockIcon boxSize={30} /><UnlockIcon boxSize={30} /><Button variant="primary">Button</Button></Box></div>
    </>
  )
}

export default App
