import Header from "./components/Header"
import MainButtons from "./components/MainButtons"
import Gallery from "./components/Gallery"
import ExtraActions from "./components/ExtraActions"
import InstallPrompt from "./components/InstallPrompt"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="page-stone min-h-screen w-full">
      <div className="mx-auto max-w-md pb-24">
        <Header />
        <MainButtons />
        <Gallery />
        <ExtraActions />
        <Footer />
      </div>
      <InstallPrompt />
    </div>
  )
}
