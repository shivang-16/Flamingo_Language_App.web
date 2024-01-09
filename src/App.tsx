import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Learn from "./components/Learn"
import Home from "./components/Home"
import Quiz from "./components/Quiz"
import Result from "./components/Result"
import Login from "./components/Login"

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/learn" element={<Learn/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
