import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import { useAppSettings } from "./context/AppSettingsContext"
import ProjectDetailsPage from "./pages/projectDetailsPage"
import BlogDetailsPage from "./pages/BlogDetailsPage"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Projects from "./pages/Project"
import ChatBotUI from "./components/ChatbotUI"

const App = () => {

  const { font } = useAppSettings();


  return (
    <div style={{ fontFamily: font, }}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailsPage />} />
      </Routes>
      <ChatBotUI /> {/* chatbot Component */}
      <Footer />
    </div>
  )
}

export default App