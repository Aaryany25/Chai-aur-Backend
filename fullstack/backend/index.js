const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("Server is Ready !!!")
})
app.get("/api/jokes",(req,res)=>{
    const jokes =[
  {
    "id": 1,
    "type": "programming",
    "setup": "Why do programmers prefer dark mode?",
    "punchline": "Because light attracts bugs."
  },
  {
    "id": 2,
    "type": "general",
    "setup": "Why don't skeletons fight each other?",
    "punchline": "They don't have the guts."
  },
  {
    "id": 3,
    "type": "programming",
    "setup": "How many programmers does it take to change a light bulb?",
    "punchline": "None. That's a hardware problem."
  },
  {
    "id": 4,
    "type": "general",
    "setup": "Why did the math book look sad?",
    "punchline": "Because it had too many problems."
  },
  {
    "id": 5,
    "type": "tech",
    "setup": "Why did the computer go to the doctor?",
    "punchline": "Because it caught a virus."
  }
]
res.send(jokes)
})
app.listen(3000,()=>{
    console.log("Server is Running successfully on port 3000")
})