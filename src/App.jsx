import './App.css'
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import BlogDetail from './pages/BlogDetail.jsx'
import Knowledge from './pages/Knowledge.jsx'
import AdminLogin from './pages/admin/Login.jsx'
import AdminDashboard from './pages/admin/Dashboard.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [lang, setLang] = useState(localStorage.getItem('language') || 'en')

  return (
    <div className="app-container">
      <Navbar lang={lang} onLanguageChange={setLang} />
      <main className="pb-12">
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<div style={{ padding: 24 }}>Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
