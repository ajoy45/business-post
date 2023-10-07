import { Outlet } from "react-router-dom"
import Footer from "./shared/Footer"
import Header from "./shared/Header"

function App() {
  return (
    <div>
      {/* header section */}
      <Header></Header>
      {/* content */}
      <Outlet></Outlet>
      {/* footer section */}
      <Footer></Footer>
    </div>
  )
}

export default App
