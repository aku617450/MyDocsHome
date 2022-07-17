import { Routes, Route, Link } from "react-router-dom"

export default function CommingSoon () {
  return(
    <div className="bg-neutral-900 text-neutral-200 h-screen flex justify-center items-center">
      <div>
        <h2 className="text-2xl text-center font-bold pb-3">Comming soon!</h2>
        <p className="text-center">
          <Link to='/MyDocsHome/dist/' className="hover:border-b-2 hover:border-neutral-200 transition-all duration-300">
            Return to Home
          </Link>
        </p>
      </div>
    </div>
  )
}