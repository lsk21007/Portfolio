import React, { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Link } from "react-router-dom"

const Header = ({ handleHome, handleEducation, handleExperiences, handleIntroduction, handleProject, handleSkill }) => {
  const [sidebar, setSidebar] = useState(false)
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 180)
  })

  return (
    <>
      <header className='header'>
        <div className='container flex'>
          <div className='logo'>
            <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Shukun Liu</div>
          </div>
          <div className='nav'>
            <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
              <li>
                <Link onClick={handleHome} to='/'>Home</Link>
              </li>
              <li>
                <Link onClick={handleIntroduction} to='/'>Introduction</Link>
              </li>
              <li>
                <Link onClick={handleExperiences} to='/'>Experience</Link>
              </li>
              <li>
                <Link onClick={handleSkill} to='/'>Skills</Link>
              </li>
              <li>
                <Link onClick={handleEducation} to='/'>Education</Link>
              </li>
              <li>
                <Link onClick={handleProject} to='/'>Projects</Link>
              </li>
            </ul>
          </div>
          <button className='navbar-items-icon' onClick={() => setSidebar(!sidebar)}>
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
