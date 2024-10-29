import { Route, Routes } from "react-router-dom"
import HomeScreen from "./components/Home"
import NavRoute from "./components/Routes"

function App() {
  return (
    <div>
      <NavRoute />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  )
}

export default App
