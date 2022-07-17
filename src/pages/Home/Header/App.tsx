import Nav from "./Nav"
import Hero from "./Hero"

export default function Header () {
  return(
    <header className="bg-neutral-900 text-neutral-200">
      <Nav />
      <div className="md:mr-20 md:ml-20 px-8 md:p-0 pt-20">
        <Hero />
      </div>
    </header>
  )
}