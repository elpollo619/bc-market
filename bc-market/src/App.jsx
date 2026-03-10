import { useState } from "react"
import Home from "./assets/pages/Home"

function App() {
  const [language, setLanguage] = useState({
    code: "GB",
    label: "English",
  })

  return <Home language={language} setLanguage={setLanguage} />
}

export default App