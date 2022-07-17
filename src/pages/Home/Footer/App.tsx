import SiteMap from "./SiteMap"
import Copyright from "./Copyright"

export default function Footer () {
  return(
    <footer className="bg-neutral-900 text-neutral-200 pt-20">
      <div className="container mx-auto pr-8 pl-8">
        <SiteMap />
        <Copyright />
      </div>
    </footer>
  )
}