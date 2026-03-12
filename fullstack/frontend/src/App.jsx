import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
function App() {
  const [jokess, setjokess] = useState([])
useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    setjokess(response.data)
    // console.log(response.data.length)
    // console.log(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
})
  return (
    <>
      <h1>Chai aur Jokes</h1>
      <p>Jokes:{jokess.length}</p>
      {
        jokess.map((joke)=>(
<div key={joke.id}>
  <h1>{joke.setup}</h1>
  <h2>{joke.punchline}</h2>
</div>
        ))
// jokes.map((joke) => {
//   return (
//     <div key={joke.id}>
//       <h1>{joke.setup}</h1>
//       <h2>{joke.punchline}</h2>
//     </div>
//   );
// })
      }
    </>
  )
}

export default App
