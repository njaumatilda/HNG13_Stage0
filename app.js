import "dotenv/config"
import express from "express"
import cors from "cors"

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.get("/me", async (req, res) => {
  try {
    const resObject = await fetch("https://catfact.ninja/fact")
    console.log(resObject)
    
    if (!resObject.ok) {
      throw new Error(
        `API call failed with the status code: ${resObject.status}`
      )
    }

    const data = await resObject.json()
    const fact = data.fact

    res.status(200).json({
      status: "success",
      user: {
        email: "njaumatildawanjiru@gmail.com",
        name: "Matilda Wanjiru Njau",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: fact,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Internal Server Error",
    })
  }
})

app.listen(PORT, () => {
  console.log(`[server]: App listening on port: ${PORT}`)
})
