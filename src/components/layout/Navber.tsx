import { Link } from "react-router"
import { ModeToggle } from "../mood-toggle"

const Navber = () => {
      return (
            <nav className="bg-slate-900">
                  <div className="max-w-11/12 mx-auto flex items-center justify-between py-4">
                        <Link to={"/"} className="flex items-center gap-3 text-slate-50">
                              <img src="src\assets\logo.png" alt="logo-photo" width={36} />
                              <p className="text-lg"><span className="font-bold">Task</span>Pulse</p>
                        </Link>
                        <ul className="flex items-center gap-3 text-slate-50">
                              <li><Link to="/tasks">Task</Link></li>
                        </ul>
                        <div>
                              <ModeToggle />
                        </div>
                  </div>
            </nav>
      )
}

export default Navber
