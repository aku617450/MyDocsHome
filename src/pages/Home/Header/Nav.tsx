import React,{ useState, useEffect } from "react"
import { Routes, Route, Link } from "react-router-dom"
import svg_github from '../../../img/svg/github.svg'

export default function Nav () {
  const [ open, setOpen ] = useState(false)
  return(
    <nav className="fixed top-0 left-0 w-full h-20 shadow bg-neutral-900 z-[999]">
      <div className="container mx-auto px-8 w-full h-full flex justify-between items-center relative text-neutral-200">
        <Link to='/MyDocsHome/dist/' className="flex justify-center items-center h-full">
          <h1 className="text-neutral-200 text-xl font-bold">
            Aku
          </h1>
        </Link>

        <ul className="hidden md:flex items-center text-base font-semibold h-full">
          <Link to='/MyDocsHome/dist/' className="flex justify-center items-center h-full px-5">
            <li className="hover:border-b-2 hover:border-neutral-200 transition-all duration-300">
              Home
            </li>
          </Link>
          <Link to='/MyDocsHome/dist/docs' className="flex justify-center items-center h-full px-5">
            <li className="hover:border-b-2 hover:border-neutral-200 transition-all duration-300">
              Docs
            </li>
          </Link>
          <Link to='/MyDocsHome/dist/components' className="flex justify-center items-center h-full px-5">
            <li className="hover:border-b-2 hover:border-neutral-200 transition-all duration-300">
              Components
            </li>
          </Link>
          <Link to='/MyDocsHome/dist/blogs' className="flex justify-center items-center h-full px-5">
            <li className="hover:border-b-2 hover:border-neutral-200 transition-all duration-300">
              Blogs
            </li>
          </Link>
          <a href="https://github.com/aku617450" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center h-full px-5">
            <li className="hover:border-b-2 hover:border-neutral-200 transition-all duration-300">
              <img src={ svg_github } alt="github" />
            </li>
          </a>
        </ul>

        <button onClick={ () => setOpen(true) } className="block md:hidden h-full px-8 absolute right-0">
          <div className="w-5 h-1 rounded bg-gray-600 mb-1"></div>
          <div className="w-5 h-1 rounded bg-gray-600 mb-1"></div>
          <div className="w-5 h-1 rounded bg-gray-600"></div>
        </button>

        <div className={`${ open ? 'top-0 right-0' : 'top-0 right-[110%]' } absolute h-screen w-full bg-neutral-900 overflow-y-hidden transition-all duration-300`}>
          <div className="h-20 flex justify-between">
            <Link to='/MyDocsHome/dist/' className="flex items-center h-full px-8">
              <h1 className="text-neutral-200 text-xl font-bold">
                Aku
              </h1>
            </Link>
            <button onClick={ () => setOpen(false) } className="block md:hidden h-full px-8">
              <div className="w-5 h-1 rounded bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 rounded bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 rounded bg-gray-600"></div>
            </button>
          </div>
          <ul className='flex flex-col items-center w-full text-base z-50 px-8'>
            <Link to='/MyDocsHome/dist/' className="hover:border-b-2 hover:border-neutral-200 w-full transition-all duration-300 py-3">
              <li className=" w-full">
                Home
              </li>
            </Link>
            <Link to='/MyDocsHome/dist/docs' className="w-full py-3">
              <li className="hover:border-b-2 hover:border-neutral-200 w-full transition-all duration-300 py-3">
                Docs
              </li>
            </Link>
            <Link to='/MyDocsHome/dist/components' className="w-full py-3">
              <li className="hover:border-b-2 hover:border-neutral-200 w-full transition-all duration-300 py-3">
                Components
              </li>
            </Link>
            <Link to='/MyDocsHome/dist/blogs' className="w-full py-3">
              <li className="hover:border-b-2 hover:border-neutral-200 w-full transition-all duration-300 py-3">
                Blogs
              </li>
            </Link>
            <a href="https://github.com/aku617450" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center h-full px-4 py-4">
              <li className="hover:border-b-2 hover:border-neutral-200 transition-all duration-300">
                <img src={ svg_github } alt="github" />
              </li>
            </a>
          </ul>
        </div>

      </div>
    </nav>
  )
}
