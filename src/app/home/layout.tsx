import { ToastContainer, toast } from "react-toastify"
import { NavBar } from "../_components/NavBar"
import "react-toastify/dist/ReactToastify.css"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <NavBar />
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        pauseOnFocusLoss={false}
        limit={1}
      />
      {children}
    </section>
  )
}
