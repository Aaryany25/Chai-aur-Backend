import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [jokes, setjokes] = useState([])

  return (
    <>
      <h1>Chai aur Jokes</h1>
      <p>Jokes:{jokes.length}</p>
      {
        jokes.map((joke)=>{
<div key={joke.id}>
  <h1>{joke.setup}</h1>
  <h2>{joke.punchline}</h2>
</div>
        })
      }
    </>
  )
}

export default App
