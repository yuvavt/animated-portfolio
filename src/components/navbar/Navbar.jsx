import "./navbar.scss"
import { motion } from "framer-motion"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>Yuva</motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/yuva-sri-vemulapalli-9136b118b/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><img src="/linkedin.png" alt="LinkedIn" /></a>
          <a href="https://github.com/yuvavt" target="_blank" rel="noopener noreferrer" title="GitHub"><img src="/git.png" alt="GitHub" /></a>
          <a href= "mailto:vemulapalliyuvasri@gmail.com" target="_blank" rel="noopener noreferrer" title="E-Mail"><img src="/email.png" alt="E-Mail"/></a>
          <a href="https://virginiatech-my.sharepoint.com/:w:/g/personal/yuva_vt_edu/EfjLv1dsm0hLsFQbI4_VE1gBUASHMiCd5eYCUcS2OGcIOQ?e=oQlLLN" target="_blank" rel="noopener noreferrer" title="Resume"><img src="/resume.png" alt="Resume"/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
