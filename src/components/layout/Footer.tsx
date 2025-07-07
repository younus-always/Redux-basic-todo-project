import { Link } from "react-router"

const Footer = () => {
      return (
            <footer className="bg-slate-900 text-slate-50 text-center py-5">
                  <p>&copy; All Right Reserved <Link to="/"><span className="font-bold">Task</span>Pulse</Link>.</p>
            </footer>
      )
}

export default Footer
