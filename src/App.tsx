import { Outlet } from "react-router"
import Navber from "./components/layout/Navber"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <div>
      <Navber />
      <main className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
