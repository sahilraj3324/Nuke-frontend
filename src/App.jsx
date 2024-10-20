import './App.css'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from './components/Home/Homepage'
import Footer from './components/Footer'
import { ThemeProvider } from "./components/theme-provider"
import { BackgroundLines } from "./components/ui/background-lines";
import Sidebar from './components/sidebar/Sidebar';

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" className ="text-left">
      
    
      <Routes>
        <Route path="/" element={<Homepage /> }/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
      <Footer />
      
    </ThemeProvider>
  )
}


export default App
