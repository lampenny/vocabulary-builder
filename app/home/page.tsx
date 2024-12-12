import { Home } from "../_components/Home"
import { Logo } from "../_components/Logo"

export default function Page() {
  return (
    <div className="h-screen p-5 md:px-20 md:py-5">
      <div className="absolute left-20 pb-10">
        <Logo width={100} height={100} />
      </div>
      <div className="mt-32">
        <Home />
      </div>
    </div>
  )
}
