import { Routes, Route, Link } from "react-router-dom"

export default function SiteMap () {
  return(
    <div className="container mx-auto mb-20 text-neutral-200">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div>
          <h3 className="font-bold mb-3">Home</h3>
          <p className="text-sm">
            <Link to='/MyDocsHome/dist/' className="hover:border-b-2 hover:border-neutral-200 transition-all duration-300">
              Home
            </Link>
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-3">Docs</h3>
          <p className="text-sm">Coming Soon!</p>
        </div>
        <div>
          <h3 className="font-bold mb-3">Components</h3>
          <p className="text-sm">Coming Soon!</p>
        </div>
        <div>
          <h3 className="font-bold mb-3">Blogs</h3>
          <p className="text-sm">Coming Soon!</p>
        </div>
      </div>
    </div>
  )
}